# peptech.dev Content Workflow

`peptech.dev` is the public, curated layer. The Google Doc is the live scratchpad.

## Working Loop

1. Capture messy thoughts, stream goals, and raw ideas in the Google Doc while building.
2. Promote only public-safe, useful bullets into the curated arrays in `src/lib/site.ts`.
3. Keep each note short: human-readable date, what was attempted, what shipped or clarified, and what remains open.
4. Run `npm run lint` and `npm run build`.
5. Commit and publish through the normal Vercel flow.

## What Belongs On The Site

- Channel purpose.
- Current stream/project links.
- Builder Radar entries for founder-led products or SaaS projects worth exploring.
- Short dated stream notes.
- Project pages.
- Useful chat commands and stream resources.
- Placeholder merch ideas that do not include private logistics.

## What Stays Backstage

- Personal merch logistics.
- Raw merch ideas.
- Half-formed audio bits.
- Private planning notes.
- Anything that only makes sense in the messy Google Doc context.

## Adding Builder Radar Entries

Add a short object to `builderRadarItems` in `src/lib/site.ts`. Include the
product name, URL, and one sentence on why it is interesting.

Builder Radar is public praise and curation. It is not an endorsement,
sponsorship, affiliate placement, or formal Twitch guest booking page.

## Adding Stream Notes

Add a short object to `streamNotes` in `src/lib/site.ts`. Use bullets, not a full recap page.

## Public Notes

Public notes currently live in the `streamNotes` array, not in standalone
pages. Add repo-backed notes later only if there is a clear need for curated,
permalinked writing.
