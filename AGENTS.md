<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## peptech.dev Project Rules

- Keep this as Jesse's developer/stream hub, not the PepTech Studios client-services site.
- Link the Google Doc directly for live notes. Do not publish raw scratchpad content into the repo.
- Keep stream notes short and inline unless Jesse explicitly asks for a full content archive again.
- Prefer server components for static content. Add client components only when an interaction needs browser state.
- Keep future dynamic work behind `src/lib` helpers, route handlers, or server actions so the file-backed content layer can evolve without a rewrite.
