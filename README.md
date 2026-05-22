# ctrl-alt-adrian — V7 Astro starter

Plain Astro. Content collections drive everything. No framework on the client.

```
npm install
npm run dev
```

## Where things live

```
src/
  content/
    writing/       essays + notes (markdown)
    log/           build-in-public entries (markdown)
    projects/      project records (json)
    reading/       book records (json)
    config.ts      collection schemas (zod)

  components/      <Nav>, <Row>, <SectionHead>, <Footer>
  layouts/         <Base> — tokens, fonts, main wrapper
  pages/
    index.astro          home (Recent / Projects / Writing / Reading)
    writing/index.astro  archive page, grouped by year
    writing/[slug].astro single article
    log/index.astro      build log archive
    reading/index.astro  reading archive
    rss.xml.ts           feed

  styles/tokens.css      CSS variables (light + dark via prefers-color-scheme)
```

## Adding content

**A new essay or note** — drop a markdown file in `src/content/writing/`:

```md
---
title: "Every engineer should write at least one CLI"
date: 2026-05-14
kind: essay        # essay | note
minutes: 9
---

Not because the world needs another flag-parser…
```

**A new project** — add a json file in `src/content/projects/`:

```json
{
  "name": "Rolnext",
  "tag": "job tracker",
  "status": "live",
  "desc": "Pipeline + recruiter triage for people who hate spreadsheets",
  "url": "https://rolnext.app"
}
```

Zod will yell at you in dev if you typo the frontmatter — that's the feature.

## The "Recent" feed

It's a merge of `writing`, `log`, and synthesized "launch" entries for `projects`,
sorted by date. See `src/lib/feed.ts`.

## Theming

Tokens live in `src/styles/tokens.css`. Dark mode is automatic via
`prefers-color-scheme`. One accent (`--accent`) does the whole site.
