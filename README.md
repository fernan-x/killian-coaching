# Killian Coaching

Personal coaching website built with Vite, React, TypeScript, shadcn-ui and Tailwind CSS.

## Getting started

**Requirements:** Node.js 20+ and npm.

```sh
# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev
```

## Build

| Command | Mode | Base path | Use case |
|---|---|---|---|
| `npm run build` | production | `/killian-coaching/` | GitHub Pages deployment |
| `npm run build:dev` | development | `/` | Local production preview |
| `npm run preview` | — | — | Preview the last build locally |

> **Why two build modes?**
> In production mode, Vite prefixes all asset paths with `/killian-coaching/` to match the GitHub Pages sub-path (`fernan-x.github.io/killian-coaching/`). In development mode, the base is `/` so you can preview the build at `localhost:4173` without a sub-path.

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/nextjs.yml`) which builds and deploys to GitHub Pages.

**Live URL:** https://fernan-x.github.io/killian-coaching/

## Project structure

```
src/
├── assets/         # Static images
├── components/     # Reusable UI components (shadcn-ui + custom)
├── hooks/          # React hooks
├── lib/            # Utilities
└── pages/          # Route-level page components
legacy/             # Old Next.js site — do not use
```

## Technologies

- [Vite](https://vitejs.dev/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn-ui](https://ui.shadcn.com/)
- [React Router v6](https://reactrouter.com/)
