#!/usr/bin/env bash
set -euo pipefail

: "${GH_IEEE_PAT:?Set GH_IEEE_PAT in the AutoPush environment secrets.}"
: "${SOURCE_GITHUB_TOKEN:?The source repository GITHUB_TOKEN is required.}"

# Let gh supply credentials without putting either token in a remote URL.
source_git() {
  GH_TOKEN="$SOURCE_GITHUB_TOKEN" git -c credential.helper= \
    -c 'credential.https://github.com.helper=!gh auth git-credential' "$@"
}

mirror_git() {
  GH_TOKEN="$GH_IEEE_PAT" git -c credential.helper= \
    -c 'credential.https://github.com.helper=!gh auth git-credential' "$@"
}

publish_mirror() {
  if ! mirror_git push mirror HEAD:refs/heads/main; then
    echo '::error::Destination push failed. Check the Git error above and GH_IEEE_PAT permissions: destination Contents and Workflows must allow write access.'
    exit 1
  fi
}

# Use the PAT owner's GitHub identity so Vercel can identify the commit author.
identity=$(GH_TOKEN="$GH_IEEE_PAT" gh api user --jq '[.id, .login] | @tsv')
IFS=$'\t' read -r user_id user_login <<< "$identity"
git config user.name "$user_login"
git config user.email "${user_id}+${user_login}@users.noreply.github.com"
git remote add mirror https://github.com/IEEE-SB-GECPKD/ieee-sb-website.git

# Retry if another source push arrives while the destination is being updated.
# All pushes are fast-forward only; unexpected destination edits are preserved.
for attempt in 1 2 3; do
  source_git fetch --no-tags origin +refs/heads/main:refs/remotes/origin/main
  mirror_git fetch --no-tags mirror +refs/heads/main:refs/remotes/mirror/main
  source_head=$(git rev-parse origin/main)
  git checkout --detach "$source_head"

  # A previous run may have pushed its empty commit before source main moved.
  # Reconcile only our empty commits, never overwrite independent code changes.
  if ! git merge-base --is-ancestor mirror/main HEAD; then
    while read -r commit; do
      subject=$(git show -s --format=%s "$commit")
      case "$subject" in
        'chore(deploy): trigger Vercel deployment'|'chore(sync): reconcile empty deployment commits') ;;
        *)
          echo "::error::Destination main has independent commits. Reconcile them with source main before retrying."
          exit 1
          ;;
      esac
      if ! git diff --quiet "$commit^" "$commit"; then
        echo "::error::Destination commit $commit changes files. Refusing to overwrite it."
        exit 1
      fi
    done < <(git rev-list HEAD..mirror/main)

    git merge --no-edit -m 'chore(sync): reconcile empty deployment commits' mirror/main
    git diff --exit-code "$source_head" HEAD
  fi

  # Publish the source update, then a separate, genuinely empty deployment commit.
  publish_mirror
  git -c commit.gpgsign=false commit --allow-empty \
    -m 'chore(deploy): trigger Vercel deployment' \
    -m "Source-Repository: IEEE-SB-GEC-Palakkad/ieee-sb-website
Source-Commit: $source_head"
  git diff --exit-code HEAD^ HEAD
  publish_mirror

  # GITHUB_TOKEN does not trigger another push workflow, preventing a sync loop.
  # Both repositories finish at the same commit, including the empty commit.
  if ! source_git push origin HEAD:refs/heads/main; then
    source_git fetch --no-tags origin +refs/heads/main:refs/remotes/origin/main
    if [[ "$(git rev-parse origin/main)" == "$source_head" ]]; then
      echo '::error::Source push was rejected. GITHUB_TOKEN needs Contents: write and branch rules must permit the synchronization commit.'
      exit 1
    fi
    echo "Source main moved; retrying synchronization (attempt $attempt)."
    continue
  fi

  source_git fetch --no-tags origin +refs/heads/main:refs/remotes/origin/main
  mirror_git fetch --no-tags mirror +refs/heads/main:refs/remotes/mirror/main
  deployment_commit=$(git rev-parse HEAD)
  if [[ "$(git rev-parse origin/main)" == "$deployment_commit" && \
        "$(git rev-parse mirror/main)" == "$deployment_commit" ]]; then
    echo "Both main branches are synchronized at $deployment_commit."
    if [[ -n "${GITHUB_STEP_SUMMARY:-}" ]]; then
      {
        echo "Both main branches: \`$deployment_commit\`"
        echo
        echo "The deployment commit has the same tree as its parent and was pushed with GH_IEEE_PAT."
      } >> "$GITHUB_STEP_SUMMARY"
    fi
    exit 0
  fi
done

echo '::error::The branches kept moving during synchronization. Rerun this workflow.'
exit 1
