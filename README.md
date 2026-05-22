# ctrl-alt-adrian
Plain Astro. Content collections drive everything. No framework on the client.

```
npm install
npm run dev
```

## Where things live

```
src/
  content/
    writing/       essays, notes, build entries (markdown)
    projects/      project records (json)
    reading/       book notes (markdown)
    config.ts      collection schemas (zod)

  components/      <Nav>, <Row>, <SectionHead>, <Footer>
  layouts/         <Base> — tokens, fonts, main wrapper
  pages/
    index.astro              home (Projects / Writing / Reading)
    writing/index.astro      archive page, grouped by year
    writing/[slug].astro     single post
    projects/[slug].astro    project detail with related writing
    reading/index.astro      reading archive
    reading/[slug].astro     single book note

  lib/feed.ts            date formatting helper
  styles/tokens.css      CSS variables (light + dark via prefers-color-scheme)

templates/         copy-paste starting points for each collection (see templates/README.md)
```

## Adding content

Copy a file from `templates/` into the matching `src/content/<collection>/` folder, rename it (the filename becomes the URL slug), and edit. Zod will yell at you in dev if you typo the frontmatter — that's the feature.

See `templates/README.md` for the field reference.

## Authoring in Obsidian

The repo is set up to be opened as an Obsidian vault. Open the project folder in Obsidian and the committed `.obsidian/` config takes over.

### What's already configured

- **Markdown links, not wikilinks** (`useMarkdownLinks: true`) — Astro can resolve `[text](path)` but not `[[wikilinks]]`.
- **New notes default to `src/content/writing/`** — `Cmd+N` lands you there.
- **Attachments go to `public/images/`** — drag an image into a note, reference it as `/images/foo.png`.
- **Templates folder is `/templates/`** — built-in Templates plugin already enabled.
- **`Cmd+Shift+T` inserts a template** into the current note.
- **Hidden from explorer/search**: `node_modules/`, `dist/`, `.astro/`, `.git/`.

### One-time setup

1. Open the project folder in Obsidian (Open vault → select the repo root).
2. Settings → Community plugins → "Turn on community plugins" → enable **QuickAdd** (already listed in `community-plugins.json`; you may need to reinstall to pull the binary).
3. Settings → Hotkeys → search "QuickAdd: New writing post" → bind a key (suggested: `Cmd+Shift+W`).
4. Same for "QuickAdd: New reading note" (suggested: `Cmd+Shift+R`).
5. Restart Obsidian once so config + plugin apply cleanly.

### Daily workflow

**New writing post:** `Cmd+Shift+W` (or your hotkey) → type a kebab-case slug → enter. QuickAdd creates the file in `src/content/writing/`, fills the frontmatter from `templates/writing.md`, and opens it. Write. Save. Dev server hot-reloads.

**New reading note:** `Cmd+Shift+R` → same flow into `src/content/reading/`.

**New project:** create a `.json` file in `src/content/projects/` manually (right-click the folder → New note → rename to `.json`). Copy the body of `templates/project.json` and edit. Obsidian shows JSON as plain text; that's fine.

**Insert a template into an existing note:** `Cmd+Shift+T` (built-in Templates plugin).

**Images:** drag into any note. Obsidian saves to `public/images/` and writes `![](public/images/foo.png)`. A remark plugin in `astro.config.mjs` rewrites that path to `/images/foo.png` at build time, so the rendered post just works. Don't hand-edit the path.

**Drafts:** set `draft: true` in frontmatter to hide from the site. Obsidian still shows it.

QuickAdd macros live in `.obsidian/plugins/quickadd/data.json` and are committed — the workflow is portable across machines.

### Things to avoid

Astro renders CommonMark + GFM, not Obsidian's extensions. These will quietly not work:

- `[[wikilinks]]` and `![[embeds]]` — use `[text](path)` and `![alt](path)`
- Callouts (`> [!note]`) — render as plain blockquotes
- Inline `#tag` in body — only `tags:` in frontmatter is read by the schema
- Dataview / Templater query syntax — Obsidian-only

## Theming

Tokens live in `src/styles/tokens.css`. Dark mode is automatic via `prefers-color-scheme`, with a manual toggle in the nav. One accent (`--accent`) does the whole site.
