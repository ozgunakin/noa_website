# Not Only Artificial

Cloudflare Workers Static Assets deployment:

- Build command: leave empty
- Deploy command: `npx wrangler deploy`
- Production branch: `main`

Local:
`npm install`
`npm run dev`

Deploy:
`npm run deploy`

## Editorial design

The homepage and generated journal use midnight navy (`#040A30`) and cool white
(`#FAFBFF`). Run with Node 22 or later (`.nvmrc`) for Wrangler.

Blog posts live in `content/blog/*.md`. In addition to title, date, description,
slug, and draft, the design supports:

```yaml
category: "Human oversight"
image: "/assets/oversight.webp"
featured: true
```

`featured: true` selects the homepage essay strip; otherwise the newest published
post is used. The latest three published posts populate the homepage automatically.
A missing image uses the research illustration and a missing category uses
“Perspectives”. Keep image paths under `/assets/`. Reading time is computed from
the article text. Edit Markdown and the generator, not generated `public/blog/`
files. `npm run build` refreshes all pages and homepage previews.

Our approach lives at `/approach/`. The homepage and journal navigation link to
this dedicated page. Legacy homepage `#principles` and `#why` links redirect to
the new page when JavaScript is available. Reduced-motion preferences are honored.

### Artwork

Four original assets were generated with the built-in Imagegen tool from the
approved design, then compressed to WebP without changing the composition:

- `public/assets/hero-ribbon.webp`: silver folded ribbon sculpture with fine
  orbital lines and two spheres on midnight navy; no text or interface.
- `public/assets/institutions.webp`: white classical columns and navy geometric shadows.
- `public/assets/research.webp`: flowing layers of cool-white paper.
- `public/assets/oversight.webp`: facing white and navy sculptural human profiles.

The generated blog folder is intentionally ignored by Git; deployment rebuilds it.
