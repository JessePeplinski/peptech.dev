<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## peptech.dev Project Rules

- Keep this as Jesse's developer/stream hub, not the PepTech Studios client-services site.
- Keep live notes, stream ideas, and raw scratchpad content in the Google Doc unless Jesse explicitly asks to publish a curated slice.
- Prefer server components for static content. Add client components only when an interaction needs browser state.
- Keep future dynamic work behind `src/lib` helpers, route handlers, or server actions so the file-backed content layer can evolve without a rewrite.
