# Electro Grand Store

Electro Grand — Client

This repository contains the Next.js-based frontend for the Electro Grand e‑commerce application (client side).

## Overview

- Framework: Next.js 14 (app router)
- Language: TypeScript
- Styling: Tailwind CSS + SCSS (Sass)
- State: Redux Toolkit + React Query
- Other libs: Axios, Framer Motion, React Hook Form, React Slick, lucide-react icons

## Quick status

This is the client (frontend) application only. The app expects a separate backend (API) which is referenced via environment variables (see ENV section).

## Getting started

### Prerequisites:

- Node.js (Recommended v18+)
- npm (or pnpm / yarn if you prefer — this README uses npm commands)

### Install dependencies:

```bash
npm install
```

### Run in development:

```bash
npm run dev
```

### Build for production:

```bash
npm run build
```

### Start production server (after build):

```bash
npm start
```

### Available npm scripts (from package.json):

- dev: next dev
- build: next build
- start: next start
- lint: next lint

## Environment variables

This project uses NEXT_PUBLIC-prefixed environment variables which are read at build/runtime. The important ones:

- NEXT_PUBLIC_APP_ENV — application environment (dev, staging, prod)
- NEXT_PUBLIC_APP_URL — frontend public URL
- NEXT_PUBLIC_APP_DOMAIN — app domain
- NEXT_PUBLIC_SERVER_URL — backend API base URL (used for rewrites/uploads)
- NEXT_PUBLIC_STAFF_KEY — staff key (if used by admin features)

If NEXT_PUBLIC_SERVER_URL is set, requests to /uploads/_ are rewritten to `${NEXT_PUBLIC_SERVER_URL}/uploads/_`(see`next.config.mjs`).

## Images

Next.js Image configuration allows images from `localhost` by default (see `next.config.mjs`). If your backend serves images from another host, add that host to `images.domains` in `next.config.mjs`.

## Project structure (important folders)

- `src/app/` — Next.js app directory, layouts, pages and global styles.
- `src/components/` — Reusable UI components (common, admin, store, etc.).
- `src/screens/` — Screen-level components (pages grouped by feature).
- `src/services/` — API service wrappers for backend endpoints.
- `src/hooks/` — Custom React hooks (auth, products, categories, forms, etc.).
- `src/store/` — Redux store and slices.
- `src/utils/` — Utility functions.

## Configuration highlights

- TypeScript paths: `@/*` -> `./src/*` (configured in `tsconfig.json`).
- Tailwind config: `tailwind.config.ts` uses content paths under `src/` and includes `tailwind-scrollbar` plugin.

## Notes for developers

- Follow existing conventions in `src/` for components and screens.
- Use the provided hooks and services for API interaction (they centralize interceptors, error handling, and token verification).
- The repo is configured for Prettier/ESLint (see `package.json` devDependencies). Run `npm run lint` and format with your editor on save.

## Contributing

If you'd like to contribute, open an issue or create a pull request against the `refactoring` branch (current working branch). Include small, focused changes and update or add tests where appropriate.

## License

This repository does not include a license file. Add a LICENSE if you plan to open-source this project.

## Useful files to review

- `package.json` — scripts and dependencies
- `next.config.mjs` — Next.js configuration and rewrites
- `tailwind.config.ts` — Tailwind setup and theme extensions
- `tsconfig.json` — TypeScript configuration and path aliases

## Contact / Notes

If you need help wiring the backend or environment for local development, set `NEXT_PUBLIC_SERVER_URL` to your API URL (for example `http://localhost:4000`) and restart the dev server.

---

Generated/updated README on behalf of the current workspace state (branch: refactoring).
