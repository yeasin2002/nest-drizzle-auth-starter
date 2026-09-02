# Project Overview

This is a NestJS authentication starter built on top of Drizzle ORM and Better Auth. It is designed to be a reusable backend foundation for projects that need email/password authentication, a PostgreSQL database via Neon serverless, and auto-generated API documentation.

## Tech Stack

| Layer           | Technology                                                            |
| --------------- | --------------------------------------------------------------------- |
| Framework       | NestJS 11                                                             |
| ORM             | Drizzle ORM (`drizzle-orm`)                                           |
| Database        | PostgreSQL via Neon serverless (`@neondatabase/serverless`)           |
| Auth            | Better Auth (`better-auth` + `@thallesp/nestjs-better-auth`)          |
| API Docs        | Swagger (`@nestjs/swagger`) + Scalar (`@scalar/nestjs-api-reference`) |
| Package Manager | pnpm                                                                  |
| Language        | TypeScript 5                                                          |

## Module Structure

```
src/
├── app.module.ts          # Root module — imports UsersModule, DbModule, AuthModule
├── main.ts                # Bootstrap, Swagger/Scalar setup, CORS, port config
├── auth/                  # Better Auth integration (service, controller, module)
├── db/                    # Database connection + Drizzle schemas
│   ├── db.service.ts      # Neon + Drizzle instance, @Global provider
│   ├── db.module.ts       # @Global module, exports DbService
│   └── schemas/           # Drizzle table definitions
│       ├── auth.ts        # Better Auth tables: user, session, account, verification
│       └── index.ts       # Re-exports all schemas
├── users/                 # Example CRUD resource
│   ├── dto/               # Request/response DTOs with @ApiProperty decorators
│   ├── entities/          # TypeScript entity types (not Drizzle tables)
│   ├── users.docs.ts      # Swagger decorator factories (separate from controllers)
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
└── lib/                   # Shared utilities (currently empty, reserved for helpers)
```

## Running the Project

```bash
# Development
pnpm dev

# Production build
pnpm build
pnpm start:prod

# Database
pnpm db:generate   # Generate migrations from schema changes
pnpm db:migrate    # Apply pending migrations
pnpm db:push       # Push schema directly (dev only)
pnpm db:studio     # Open Drizzle Studio GUI

# Docs (generate OpenAPI types from running server)
pnpm openapi
```

## API Docs URLs (dev)

- Swagger UI: `http://localhost:4000/swagger`
- Scalar UI: `http://localhost:4000/scaler`
- OpenAPI JSON: `http://localhost:4000/openapi-json`
- Better Auth OpenAPI: `http://localhost:4000/api/auth/open-api/generate-schema`
