---
trigger: model_decision
description: when you are testing and you want Testing Standards
---

# Testing Standards
- Write unit tests for all components, hooks, and server actions using Vitest.
- Place tests in `__tests__/` folders next to the files they test (e.g., `src/components/Button/__tests__/Button.test.tsx`).
- Achieve at least 80% test coverage for critical paths (e.g., authentication, data fetching).
- Mock external dependencies (e.g., Supabase client) using Vitest’s mocking utilities.
- Write tests before implementation (TDD) when prompted to generate code.
- Include edge case tests for all functions (e.g., null inputs, empty arrays).
- Use descriptive test names (e.g., `should render Button with disabled state`).
- Run tests automatically on file changes using `vitest --watch`.