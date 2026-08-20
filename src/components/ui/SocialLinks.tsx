"use client";

import { GithubIcon, LinkedinIcon, FacebookIcon } from "./BrandIcons";
import { visibleSocialLinks, type SocialLink } from "@/data/social";
import { cn } from "@/lib/utils";

const iconMap = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  facebook: FacebookIcon,
} as const;

export function SocialLinks({
  className,
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {visibleSocialLinks.map((s: SocialLink) => {
        const Icon = iconMap[s.key];
        return (
          <a
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className="grid h-10 w-10 place-items-center rounded-full border-hair text-[var(--color-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
