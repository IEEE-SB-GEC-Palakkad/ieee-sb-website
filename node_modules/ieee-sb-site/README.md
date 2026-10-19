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
