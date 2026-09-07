"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { SocialLinks } from "./ui/SocialLinks";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-[var(--color-border)] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <button
              onClick={() =>
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2"
              aria-label="Back to top"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-fg)] text-sm font-bold text-[var(--color-bg)]">
                JD
              </span>
              <span className="text-sm font-medium tracking-tight">
                {profile.name}
              </span>
            </button>
            <p className="text-sm text-[var(--color-muted)]">{t("footer.tagline")}</p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <SocialLinks />
            <button
              onClick={() =>
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
              }
              className="link-underline inline-flex items-center gap-1.5 text-xs text-[var(--color-subtle)] transition-colors hover:text-[var(--color-fg)]"
            >
              <ArrowUp size={13} strokeWidth={2} />
              {t("footer.backToTop")}
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-subtle)] sm:flex-row sm:text-left">
          <p>{t("footer.rights")}</p>
          <p>
            {t("footer.builtWith")} · Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
