"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, Mail, MessageCircle } from "lucide-react";
import { siteLinks } from "@/lib/site";

export function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        widgetRef.current &&
        event.target instanceof Node &&
        !widgetRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6"
    >
      <div
        id="contact-widget-menu"
        hidden={!isOpen}
        className="absolute bottom-full right-0 mb-3 w-60 overflow-hidden rounded-lg border border-border bg-background/95 shadow-[0_18px_55px_-18px_rgba(0,0,0,0.75)] backdrop-blur-md"
      >
        <a
          href={siteLinks.email}
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-surface-raised hover:text-[var(--color-text-primary)] focus:bg-surface-raised focus:text-[var(--color-text-primary)] focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <Mail
            className="h-4 w-4 text-brand-orange"
            aria-hidden="true"
          />
          <span>Email me</span>
        </a>
        <a
          href={siteLinks.schedule}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 border-t border-border px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-surface-raised hover:text-[var(--color-text-primary)] focus:bg-surface-raised focus:text-[var(--color-text-primary)] focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <CalendarDays
            className="h-4 w-4 text-brand-orange"
            aria-hidden="true"
          />
          <span>Schedule a call</span>
        </a>
      </div>

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-brand-orange/35 bg-background/90 p-3 text-sm font-semibold text-[var(--color-text-primary)] shadow-[0_15px_40px_-18px_rgba(255,165,0,0.85)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-brand-orange hover:shadow-[0_18px_45px_-18px_rgba(255,165,0,1)] focus:outline-none focus:ring-2 focus:ring-brand-orange/45 focus:ring-offset-2 focus:ring-offset-background sm:px-4 sm:py-3"
        aria-expanded={isOpen}
        aria-controls="contact-widget-menu"
        aria-label="Contact"
        onClick={() => setIsOpen((current) => !current)}
      >
        <MessageCircle
          className="h-4 w-4 text-brand-orange"
          aria-hidden="true"
        />
        <span className="hidden sm:inline">Contact</span>
      </button>
    </div>
  );
}
