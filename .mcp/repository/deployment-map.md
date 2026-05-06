# Deployment Map

## Deployment Model

ChornPlanet is deployed through GitHub-to-Vercel integration. There is no repo-root GitHub Actions workflow currently documented as required.

## Build And Runtime Commands

From `package.json`:

- Development: `npm run dev` or `yarn dev`
- Build: `npm run build` or `yarn build`
- Lint: `npm run lint` or `yarn lint`
- Static serve command: `npm run start` runs `npx serve@latest out`
- Homepage sync script: `npm run sync:homepage-content`

`package.json` declares Yarn 4, but a `package-lock.json` may also exist. Do not churn lockfiles unless changing dependencies.

## Next Config

`next.config.mjs` controls:

- `trailingSlash: true`
- security headers and CSP
- cache headers for images, Smart City, Smart Mobility, and OpenGraph images
- image optimizer bypass with `images.unoptimized: true`
- remote image host allowlist
- CDN rewrites for OpenGraph images
- CDN redirects for public images and Smart City/Mobility assets
- selected route redirects

## Vercel Config

`vercel.json` sets:

- `X-Robots-Tag: all`
- `Cache-Control: public, max-age=0, must-revalidate`

## Deployment Safety

Do not deploy production, change production auth, expose secrets, or mutate production schemas without explicit approval. For production-facing route, metadata, server, or deployment changes, run `npm run build` before shipping.
