type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-orange">
          {eyebrow}
        </p>
        <h1 className="text-balance break-words text-4xl font-bold leading-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-strong">
          {description}
        </p>
      </div>
    </section>
  );
}
