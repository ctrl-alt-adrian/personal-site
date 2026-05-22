# Content templates

Copy a template into the matching `src/content/<collection>/` folder, rename it, edit. Schemas live in `src/content/config.ts`.

| Template          | Destination                       | Filename → URL              |
| ----------------- | --------------------------------- | --------------------------- |
| `writing.md`      | `src/content/writing/<slug>.md`   | `/writing/<slug>`           |
| `log.md`          | `src/content/log/<slug>.md`       | `/log/<slug>`               |
| `project.json`    | `src/content/projects/<slug>.json` | (no page — listed on home) |
| `reading.json`    | `src/content/reading/<slug>.json` | (no page — listed on home) |

## Enums

- `writing.kind` — `essay` | `note`
- `log.kind` — always `build`
- `project.status` — `live` | `beta` | `wip` | `archived`
- `reading.state` — `reading` | `rereading` | `done` | `shelf`

## Dates

All `date`, `shipped`, `finished` fields use `YYYY-MM-DD`.

## Optional fields

- `writing.minutes` — reading time (number)
- `writing.draft` / `log.draft` — true hides from indexes
- `project.url`, `project.shipped`, `project.order` — order controls home-page sort (lower = first)
- `reading.finished` — only meaningful when `state` is `done`
