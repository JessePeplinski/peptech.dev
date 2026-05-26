import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Placeholder merch ideas for peptech.dev, Jesse Peplinski's developer and stream hub.",
  alternates: {
    canonical: "/merch",
  },
  openGraph: {
    title: "Merch - peptech.dev",
    description:
      "Placeholder merch ideas for peptech.dev, Jesse Peplinski's developer and stream hub.",
    url: "/merch",
  },
};

const merchIdeas = [
  {
    name: "Ship the thing",
    format: "Black tee / small orange chest print",
    note: "The default stream rule when scope starts expanding.",
  },
  {
    name: "One meaningful thing",
    format: "Sticker / desk card",
    note: "A reminder that the stream goal is progress, not spectacle.",
  },
  {
    name: "Live build crew",
    format: "Hoodie / back print",
    note: "For the regulars who show up while the product is still messy.",
  },
  {
    name: "Scope it down",
    format: "Hat / embroidered text",
    note: "Probably the most useful product advice on the channel.",
  },
];

export default function MerchPage() {
  return (
    <div>
      <PageHero
        eyebrow="merch"
        title="Pretend merch, for now."
        description="This is a placeholder page for stream merch ideas. No store, no checkout, no private sizing notes."
      />

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl divide-y divide-border">
          {merchIdeas.map((item) => (
            <div key={item.name} className="py-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-sm text-muted">{item.format}</p>
              </div>
              <p className="mt-3 leading-8 text-muted-strong">{item.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
