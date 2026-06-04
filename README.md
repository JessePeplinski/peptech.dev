# peptech.dev

Jesse Peplinski's developer and stream hub.

This site is intentionally separate from [peptechstudios.com](https://peptechstudios.com). `peptechstudios.com` is the client-services/business site. `peptech.dev` is the developer persona: story, channel purpose, active stream projects, Builder Radar, and merch ideas.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- MDX / Markdown content
- Vercel

## Commands

```sh
npm run dev
npm run lint
npm run build
npm run start
```

## Content

- Homepage copy and curated lists: `src/app/page.tsx` and `src/lib/site.ts`
- Content workflow: `docs/content-workflow.md`

The Google Doc stays the backstage scratchpad for rough notes and stream ideas.
Do not mirror it raw into the repo or add it to global navigation by default.

## Routes

- `/` - developer hub homepage
- `/merch` - placeholder merch ideas
- `/twitch` - temporary redirect to the Twitch channel
- `/projects` and `/streams` - temporary redirects to homepage anchors

## Publishing

The production domain is `https://peptech.dev`.

Before publishing, verify:

```sh
npm run lint
npm run build
```

The site is hosted on Vercel. DNS is managed in Cloudflare.
