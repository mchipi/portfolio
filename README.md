# Marija Chipishkova — Portfolio

A single-page portfolio built as a magazine feature: editorial typography,
warm paper palette, and a small hand-drawn annotation system. Vite + React
18 + TypeScript + Tailwind CSS + Framer Motion, no backend.

## Development

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

`npm run build` type-checks with `tsc -b` and outputs a static site to
`dist/`.

## Content

All copy, experience, projects, and skills live in `src/content/` as typed
data (`profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`). Edit those
files to update the site — components render purely from this data.

## Deploy

The build output in `dist/` is a fully static site — deploy it anywhere
that serves static files.

**Cloudflare Pages**: connect the repo, set build command to
`npm run build`, output directory to `dist`, then add `chipishkova.com` as
a custom domain under the project's Custom Domains settings.

**Netlify**: connect the repo (build command `npm run build`, publish
directory `dist`), or run `netlify deploy --prod --dir=dist` from a local
build. Add `chipishkova.com` under Domain settings and point its DNS
(A/ALIAS or CNAME, per Netlify's instructions) at Netlify.

Either way, update `index.html`'s canonical/OG URLs and `public/sitemap.xml`
/ `public/robots.txt` if the domain ever changes.
