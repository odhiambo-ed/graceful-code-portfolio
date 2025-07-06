---
trigger: model_decision
description: When working on the website UI
---

# UI and Styling
- Use Tailwind CSS for all styling, following a mobile-first approach.
- Create reusable components in `src/components/` with clear prop interfaces.
- Use React Icons for icons, preferring `size` and `className` props for styling.
- Implement responsive designs with Tailwind’s breakpoints (e.g., `sm:`, `md:`, `lg:`).
- Add smooth transitions using Tailwind’s `transition` utilities (e.g., `transition-all duration-300`).
- Ensure accessibility with ARIA attributes and keyboard navigation.
- Use React Context API for UI state (e.g., filters, modals) when needed.
- Avoid external animation libraries like Framer Motion; use Tailwind transitions instead.
- Group related styles in utility files (e.g., `src/lib/styles.ts`) for reuse.