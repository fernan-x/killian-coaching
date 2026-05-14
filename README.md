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

| Command | Base path | Use case |
|---|---|---|
| `npm run dev` | `/` | Local dev server at `localhost:8080` |
| `npm run build` | `/` | Production build (root domain, no sub-path) |
| `npm run build:dev` | `/killian-coaching/` | Staging build for GitHub Pages |
| `npm run preview` | `/` | Preview the last production build at `localhost:4173` |

> Staging deploys to `fernan-x.github.io/killian-coaching/` and requires the `/killian-coaching/` sub-path prefix. Production runs at the root of its domain.

## Deployment

| Branch | Environment | Build command |
|---|---|---|
| `develop` | Staging — `fernan-x.github.io/killian-coaching/` | `npm run build:dev` |
| `main` | Production | `npm run build` |

Pushes to either branch automatically trigger the GitHub Actions workflow (`.github/workflows/nextjs.yml`) and deploy to GitHub Pages.

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
