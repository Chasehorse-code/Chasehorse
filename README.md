# ChaseHorse

ChaseHorse is a field-task management platform foundation for employee operations.
This repository currently contains the initial project structure and a small,
tested backend slice. It is not production-ready.

## Repository structure

- `apps/mobile` — Expo React Native and TypeScript mobile shell
- `apps/admin-web` — React, TypeScript, and Vite admin shell
- `backend/erp-api` — Spring Boot API
- `database/migrations` — Flyway SQL migrations
- `docs` — requirements, architecture, database, API, and security documentation

## Local development

Prerequisites: Node.js 20+, npm 10+, Java 21+, and Maven 3.9+.

```bash
cp .env.example .env
cd backend/erp-api
mvn test
mvn spring-boot:run
```

The supplied Supabase values in `.env.example` are publishable client values.
The current foundation does not initialize a Supabase client yet; when that is
added, use the `VITE_` and `EXPO_PUBLIC_` variables for the corresponding app.
Never put a service-role key in either client app or in committed environment
examples.

The API health check is available at `GET http://localhost:8080/api/v1/health`.
Springdoc UI is available at `/swagger-ui.html`, and the generated OpenAPI
document is available at `/v3/api-docs`.

The frontend directories are intentionally minimal shells. Install their
dependencies from the relevant directory before starting them:

```bash
cd apps/admin-web && npm install && npm run dev
cd apps/mobile && npm install && npm run start
```

## Scope and safety

- Employee registration remains pending until an administrator or manager approves it.
- Only an administrator may grant manager privileges.
- AI verification and operations-manager approval are separate decisions.
- Wallet credits must only be recorded after the configured approvals.
- Evidence is private server-side data; client apps must never contain service-role credentials.
- Task fields and checklist templates remain unfinalized and are deliberately not modeled yet.

See [docs/requirements.md](docs/requirements.md) for the current boundary and
the incomplete work that remains.

