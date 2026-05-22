# Content templates

Copy a template into the matching `src/content/<collection>/` folder, rename it, edit. Schemas live in `src/content/config.ts`.

| Template          | Destination                        | Filename → URL              |
| ----------------- | ---------------------------------- | --------------------------- |
| `writing.md`      | `src/content/writing/<slug>.md`    | `/writing/<slug>`           |
| `project.md`      | `src/content/projects/<slug>.md`   | `/projects/<slug>`          |
| `reading.md`      | `src/content/reading/<slug>.md`    | `/reading/<slug>`           |

## Enums

- `writing.kind` — `essay` | `note` | `build`
- `project.status` — `live` | `beta` | `wip` | `archived`
- `reading.state` — `reading` | `rereading` | `done` | `shelf`

## Dates

All `date`, `shipped`, `finished` fields use `YYYY-MM-DD`.

## Optional fields

- `writing.updated` — date; shown as "updated" timestamp if set
- `writing.tags` — array of strings; rendered below the post body
- `writing.project` — slug of a project file; renders a link to `/projects/<slug>` in the post header
- `writing.draft` — true hides from index
- `project.url` — external link; opens in a new tab. The home-page title links here when set
- `project.shipped` — date; home-page project list sorts by this (newest first)
- `reading.finished` — only meaningful when `state` is `done`
