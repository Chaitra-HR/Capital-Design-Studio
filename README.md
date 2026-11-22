# Capital Design Studio

One-page marketing website for Capital Design Studio, built with React 19, TypeScript and Vite.
Live at https://capitaldesign.studio

## Scripts

| Command           | What it does                  |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start the dev server          |
| `npm run build`   | Type-check and build for prod |
| `npm run preview` | Serve the production build    |
| `npm run lint`    | ESLint (incl. a11y rules)     |
| `npm run format`  | Prettier                      |
| `npm test`        | Vitest + Testing Library      |

## Folder structure

```
src/
├── app/            App shell + router config
├── assets/         Images and icons imported by code
├── components/
│   ├── ui/         Reusable primitives (Button, …) — no page knowledge
│   └── layout/     Header, Footer, Layout (route shell)
├── sections/       Page-level blocks (Hero, ServicesGrid, …) composed into pages
├── pages/          Home (the whole site) and the 404 page
├── content/        Site copy & data (nav, services, projects) — edit text here
├── hooks/          Custom React hooks
├── lib/            Framework-agnostic helpers, route constants
├── styles/         fonts.css (@font-face), tokens.css, global.css
├── types/          Shared TypeScript types
└── test/           Test setup
public/             Static files served as-is (favicon, robots.txt, fonts/)
```

### Conventions

- One component per folder: `Name.tsx`, `Name.module.css`, `Name.test.tsx`, `index.ts`.
- Import with the `@/` alias (`@/components/ui`), not long relative paths.
- Styling uses CSS Modules + tokens in `src/styles/tokens.css` — no hard-coded colours.
- Copy lives in `src/content`, not inside components.

## Typography

| Role             | Family     | Cut (weight)             | Token            |
| ---------------- | ---------- | ------------------------ | ---------------- |
| Headlines        | Signifier  | Light 300 + Light Italic | `--font-display` |
| Body copy        | Söhne      | Buch 400, Kräftig 500    | `--font-body`    |
| Eyebrows, labels | Söhne Mono | Buch 400                 | `--font-mono`    |

Only these five cuts are loaded (subset WOFF2 in `public/fonts`). Söhne Buch and Kräftig, Signifier Light and Light Italic are preloaded in `index.html`.

> **Licence:** these WOFF2 files are made from Klim _trial_ fonts, which are not licensed for production. Replace them with licensed web fonts (same file names) before launch.
> To add a cut, convert it to WOFF2, add an `@font-face` in `src/styles/fonts.css`, and a weight token.

## Placeholder assets

- `public/images/avatars/` and `public/images/showcase/`: stock photos from Unsplash (Unsplash License: free for commercial use, no attribution required), resized. Replace the avatars with real client photos, used with permission.
- Publication logos in `src/content/home.ts` are made-up placeholders.
- The showcase previews (`src/components/SitePreview/mocks.tsx`) are fictional advisory firms, each with its own typeface: Instrument Serif, Outfit, Newsreader, Figtree, DM Sans/Mono, Fraunces, Source Serif 4, IBM Plex Mono, Young Serif (all SIL OFL, self-hosted via @fontsource) plus the site's Signifier/Söhne. They load only where the previews render.

## Deploying (Netlify)

1. In Netlify, choose **Add new site → Import an existing project** and pick this repo.
2. Netlify reads `netlify.toml`: it runs `npm run build`, publishes `dist/`, and sets `VITE_SITE_URL`.
3. Add the custom domain `capitaldesign.studio` in **Domain management**.

`VITE_SITE_URL` drives the canonical link, social-preview tags, `sitemap.xml` and `robots.txt`. Change it in `netlify.toml` if the domain changes. Locally it comes from `.env` (see `.env.example`).

## Performance

- Images are WebP or right-sized JPEG and lazy-load below the hero.
- The Process illustrations load in their own chunk once the page is idle.
- Preview fonts load only their Latin subset; site fonts are preloaded.
- Hashed assets and fonts are cached for a year (see `netlify.toml`).
