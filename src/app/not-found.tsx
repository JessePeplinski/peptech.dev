import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-brand-orange">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          This page is not here.
        </h1>
        <p className="mt-5 leading-7 text-muted-strong">
          The public hub is curated, so some scratchpad ideas intentionally do
          not have URLs.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-gradient-to-r from-brand-orange to-brand-burnt px-5 py-3 text-sm font-semibold text-white"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
