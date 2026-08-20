"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { languages } from "@/i18n/translations";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Switch language"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border-hair px-3 py-2 text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]",
          open && "text-[var(--color-fg)]"
        )}
      >
        <Globe size={15} strokeWidth={1.75} />
        <span>{current.short}</span>
        <ChevronDown
          size={13}
          strokeWidth={2}
          className={cn("transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-[calc(100%+8px)] z-50 w-40 overflow-hidden rounded-2xl border-hair glass p-1 shadow-2xl"
        >
          {languages.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                  l.code === lang
                    ? "bg-white/[0.06] text-[var(--color-fg)]"
                    : "text-[var(--color-muted)] hover:bg-white/[0.04] hover:text-[var(--color-fg)]"
                )}
              >
                <span>
                  {l.label}
                  {!compact && (
                    <span className="ml-2 text-[10px] uppercase tracking-wider text-[var(--color-subtle)]">
                      {l.short}
                    </span>
                  )}
                </span>
                {l.code === lang && <Check size={14} strokeWidth={2.25} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
