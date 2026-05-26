export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl justify-center px-6 py-12 md:justify-end">
        <div className="text-center text-sm text-[var(--color-text-muted)] md:text-right">
          <p>&copy; {new Date().getFullYear()} Jesse Peplinski.</p>
        </div>
      </div>
    </footer>
  );
}
