# IEEE SB GEC Palakkad Website

The official website of the **IEEE Student Branch, Government Engineering College, Palakkad**.

Developed with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Getting Started

To run the project locally or preview production builds, ensure you have [Node.js](https://nodejs.org/) installed. We use **npm** as our primary package manager.

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

By default, the server runs on [http://localhost:5173](http://localhost:5173).

### 3. Code Formatting

To format the codebase using **Prettier**, run:

```bash
npm run format
```

### 4. Build for Production

To generate static production files under `dist/`, run:

```bash
npm run build
```

---

## Repository synchronization

Push website changes to `main` in [IEEE-SB-GEC-Palakkad/ieee-sb-website](https://github.com/IEEE-SB-GEC-Palakkad/ieee-sb-website). The `Sync to IEEE-SB-GECPKD` workflow copies `main` to [IEEE-SB-GECPKD/ieee-sb-website](https://github.com/IEEE-SB-GECPKD/ieee-sb-website), then pushes a separate empty commit to trigger its Vercel integration. It copies that same commit back to the source using `GITHUB_TOKEN`, so both `main` branches have identical history without triggering another sync run. Pull before making your next change.

The workflow uses `GH_IEEE_PAT` from the source repository's **AutoPush** environment. The PAT must belong to the GitHub account connected to Vercel and allow pushing contents and workflow files to the destination repository. For a classic PAT, this requires `repo` and `workflow` scopes; for a fine-grained PAT, grant destination repository **Contents: write** and **Workflows: write** permissions.

Synchronization runs only in the source repository and can also be rerun manually from Actions on `main`. GitHub Pages runs only in the source; the destination uses Vercel. Independent destination code changes stop synchronization instead of being overwritten. Other branches and tags are not mirrored.

---

## 📂 Project Structure

A clean, standardized folder hierarchy is maintained across the repository:

- **`src/components/`**: Modular page sections and layouts.
  - **`Common/`**: Reusable common utilities like headings and scroll reveal elements.
  - **`Events/`**: Dedicated subfolders containing page components and assets for past workshops (e.g., `EventsHub`, `Excelsior2025`, `Reise`).
  - **`Execom/`**: Executive committee grid layouts organized by year.
  - **`Societies/`**: Cards and directories highlighting IEEE technical societies.
- **`src/pages/`**: Primary page shells mapped by the router (`HomePage`, `EventsPage`, `ExecomPage`).
- **`public/`**: Public assets and site photos under `/images/`.
- **`src/assets/images/`**: High-priority vector and raster logo assets resolved at compilation.

---

## 🤝 Contributions Guide

### Writing Better Commit Messages

We adhere to the **Conventional Commits** specification. This formatting standard ensures a readable, structured Git log history.

#### Format

```
<type>[optional scope]: <description>

[optional body]
[optional footer(s)]
```

#### Commit Types

- **`feat`** – Introduces a new feature to the codebase.
- **`fix`** – Corrects a bug or layout error.
- **`docs`** – Updates to documentation (such as the `README.md`).
- **`style`** – Formatting changes (white-space, semi-colons) that do not affect runtime behavior.
- **`refactor`** – Code changes that neither fix a bug nor introduce a feature.
- **`perf`** – Performance optimizations.
- **`build`** – Changes to the build system, Vite configurations, or external dev dependencies.
- **`chore`** – Repetitive maintenance tasks (updating node modules, formatting scripts).

#### Examples

- **Good:** `feat: integrate full-screen lightbox overlay on media gallery`
- **Good:** `style: format codebase with Prettier format script`
- **Bad:** `fixed some stuff`
