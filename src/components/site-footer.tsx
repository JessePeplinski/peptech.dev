import { siteLinks, socialLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div className="flex items-center gap-6">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
                aria-label={item.label}
              >
                <Icon className="h-5 w-5" aria-hidden={true} />
              </a>
            );
          })}
        </div>

        <div className="text-center text-sm text-[var(--color-text-muted)] md:text-right">
          <div className="mb-2 flex flex-wrap justify-center gap-4 md:justify-end">
            <a
              href={siteLinks.personal}
              target="_blank"
              rel="noreferrer"
              className="text-brand-orange underline transition-all hover:brightness-125"
            >
              Personal site
            </a>
            <a
              href={siteLinks.pepTechStudios}
              target="_blank"
              rel="noreferrer"
              className="text-brand-orange underline transition-all hover:brightness-125"
            >
              Business site
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Jesse Peplinski.</p>
        </div>
      </div>
    </footer>
  );
}
