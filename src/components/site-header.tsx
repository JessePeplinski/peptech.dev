import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold transition-opacity hover:opacity-80"
        >
          <span className="gradient-text">peptech.dev</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <details className="group md:hidden">
          <summary className="list-none p-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] [&::-webkit-details-marker]:hidden">
            <Menu className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Menu</span>
          </summary>
          <div className="absolute left-0 right-0 top-16 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
