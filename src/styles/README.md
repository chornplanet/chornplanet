# Styles Structure

`src/styles` is grouped by ownership so route-group work can share the current
desktop base without adding more global files at the root.

## Folders

- `base/`: browser/app-wide primitives such as `globals.scss` and optional Tailwind entry.
- `vendor/`: third-party CSS files that should stay close to their original output.
- `legacy/`: inherited template-level styles and generated CSS artifacts.
- `utilities/`: broad helper classes and small shared visual utilities.
- `navigation/`: navbar and language-switching styles.
- `layout/`: shared layout surfaces such as the footer.
- `home/`: current homepage section styles.
- `smart-city/`: Smart City, Smart Mobility, and related legacy platform styles.
- `platform/`: canonical platform channel styles, including Smart Food, Luxury, and future roadmap styles.
- `pages/`: page-specific styles for existing standalone pages.

## Roadmap Guidance

- Put new platform layout styles in `platform/`, preferably with a stable prefix such as `.platform-*`, `.platform-home-*`, or `.platform-channel-*`.
- Keep page/channel styles scoped under a root page class to avoid leaking into legacy routes.
- Preserve import order when extracting shared layout code from `(desktop)` to `(roadmap)`: base, vendor, external package CSS, legacy/utilities, navigation/layout, then feature/page styles.
- Avoid editing `legacy/style.scss` and `legacy/responsive.scss` unless the change is intentionally touching the inherited template.
