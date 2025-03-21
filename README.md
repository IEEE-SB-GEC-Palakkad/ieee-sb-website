# IEEE Website
Official Website of **IEEE SB GEC Palakkad**.

Read the below *Contributions Guide* to write better commit messages. Have Fun!

---
## Preview or Run the React App

So, you wanna try the site out yourself? Here's the way

I'm using `yarn` as my package manager and also `vite` as the build tool, cause why not!?

Here you go
1. Install the dependencies
    ```
        yarn
    ```
2. Run the server
   ```
        yarn run dev
   ```

By default this will run the app on `localhost:5173`

---

## Contributions Guide
### 101 - Writing better commits

The following content is taken form a freeCodeCamp article ([refer this link](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/))



**Conventional Commits**

Now that we've covered basic commit structure of a good commit message, I'd like to introduce Conventional Commits to help provide some detail on creating solid commit messages.

At D2iQ, we use Conventional Commit which is a great practice among engineering teams. Conventional Commit is a formatting convention that provides a set of rules to formulate a consistent commit message structure like so:

```
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

The commit type can include the following:

    feat – a new feature is introduced with the changes
    fix – a bug fix has occurred
    chore – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
    refactor – refactored code that neither fixes a bug nor adds a feature
    docs – updates to documentation such as a the README or other markdown files
    style – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
    test – including new or correcting previous tests
    perf – performance improvements
    ci – continuous integration related
    build – changes that affect the build system or external dependencies
    revert – reverts a previous commit 

The commit type subject line should be all lowercase with a character limit to encourage succinct descriptions.

The optional commit body should be used to provide further detail that cannot fit within the character limitations of the subject line description.

---
### Commit Message Comparisons

Review the following messages and see how many of the suggested guidelines they check off in each category.

**Good**

    feat: improve performance with lazy load implementation for images
    chore: update npm dependency to latest version
    Fix bug preventing users from submitting the subscribe form
    Update incorrect client phone number within footer body per client request

**Bad**

    fixed bug on landing page
    Changed style
    oops
    I think I fixed it this time?
    empty commit messages

---

