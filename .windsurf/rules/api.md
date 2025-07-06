---
trigger: model_decision
description: when working with API Routes and Server Actions
---

# API Routes and Server Actions
- Use Next.js server actions in `src/actions/` for database operations with Supabase.
- Implement API routes in `app/api/[route]/route.ts` only when server actions are insufficient.
- Always validate inputs using Zod before processing requests.
- Return standardized responses:
  - Success: `{ data: T, error: null }`
  - Error: `{ data: null, error: string }`
- Use Supabase server-side clients (`createServerClient`) for database queries.
- Secure API routes with middleware for authentication (e.g., Supabase auth).
- Include TypeScript interfaces for request and response payloads.
- Log errors to the console with context (e.g., `console.error("Failed to fetch user", { userId, error })`).
- Optimize queries with pagination, filtering, and caching where applicable.