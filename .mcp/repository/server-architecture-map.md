# Server Architecture Map

## Layering

Server-side code follows a domain/service/port/repository shape:

```text
server/core/domain        typed entities
server/core/ports         interfaces
server/core/services      business/content services
server/adapters/outbound  external adapters and repositories
server/infrastructure/db  database connection infrastructure
```

## MongoDB

- MongoDB infrastructure: `server/infrastructure/db/infra.mongodb.ts`
- Repository implementations: `server/adapters/outbound/mongo.repository/`
- Content services: `server/core/services/*-content.service.ts`
- Content ports: `server/core/ports/*-content.interface.ts`
- Content entities: `server/core/domain/*-content.entity.ts`

## OpenAI

- API route entry points: `src/app/api/openai/`, including named companion routes.
- Outbound adapters: `server/adapters/outbound/openai/`
- Inspect both areas before changing AI companion behavior.

## API Routes

API routes live in `src/app/api/`. Content endpoints mirror the content service domains. Keep public API contracts stable unless an active plan and approval explicitly scope a breaking change.

## Path Alias

`tsconfig.json` maps `@/*` broadly into source/server areas. Follow existing import style in nearby files.

## Server Change Checklist

- Keep domain, port, service, repository, and route names aligned.
- Validate environment-variable needs without committing secrets.
- Do not change production data schemas without explicit approval.
- For behavior changes, run lint and build.
- For content route changes, test at least one localized page that consumes the service.
