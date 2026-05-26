import { BrandIcon } from "@/components/brand-icons";
import { socialLinks } from "@/lib/site";

type SocialIconLinksProps = {
  className?: string;
};

export function SocialIconLinks({ className = "" }: SocialIconLinksProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {socialLinks.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
          aria-label={item.label}
        >
          <BrandIcon name={item.icon} />
        </a>
      ))}
    </div>
  );
}
