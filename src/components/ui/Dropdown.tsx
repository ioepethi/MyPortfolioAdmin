"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type OpenDetail = { section: string; sub?: string };

/** Scrolls to a sub-element inside a just-opened panel, once laid out. */
function scrollToSub(id: string) {
  requestAnimationFrame(() => {
    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  });
}

/**
 * Compact professional dropdown section — Semantic UI style behavior:
 * click/tap toggles, animated open/close, aria-expanded, keyboard accessible,
 * opens remotely via the `jp:open-section` event (used by the nav dropdowns).
 */
export function DropdownSection({
  id,
  index,
  title,
  children,
  theme = "dark",
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
  theme?: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = useId();
  const pendingSub = useRef<string | undefined>(undefined);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const d = (e as CustomEvent<OpenDetail>).detail;
      if (d.section !== id) return;
      pendingSub.current = d.sub;
      setOpen(true);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("jp:open-section", onOpen);
    return () => window.removeEventListener("jp:open-section", onOpen);
  }, [id]);

  useEffect(() => {
    if (open && pendingSub.current) {
      scrollToSub(pendingSub.current);
      pendingSub.current = undefined;
    }
  }, [open]);

  return (
    <section
      id={id}
      data-nav={theme}
      className={cn(theme === "light" ? "t-light" : "t-dark", "hairline-t")}
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-center gap-4 py-7 text-left sm:gap-6 sm:py-9"
        >
          <span className="font-mono text-sm text-[var(--color-green)] sm:text-base">
            {index}
          </span>
          <span className="text-[clamp(1.75rem,4.5vw,3.5rem)] font-extrabold uppercase leading-none tracking-[-0.03em] transition-colors duration-300 group-hover:text-[var(--color-green)]">
            {title}
          </span>
          <ChevronDown
            size={22}
            strokeWidth={2}
            aria-hidden
            className={cn(
              "ml-auto shrink-0 text-[var(--sub)] transition-all duration-300 group-hover:text-[var(--color-green)]",
              open && "rotate-180 text-[var(--color-green)]"
            )}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
            }
            className="overflow-hidden"
          >
            <div className="mx-auto max-w-[90rem] px-5 pb-14 sm:px-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/** Smaller nested expander used inside dropdown panels (Experience, Education). */
export function NestedDisclosure({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = useId();

  useEffect(() => {
    if (!id) return;
    const onOpen = (e: Event) => {
      const d = (e as CustomEvent<OpenDetail>).detail;
      if (d.sub === id) setOpen(true);
    };
    window.addEventListener("jp:open-section", onOpen);
    return () => window.removeEventListener("jp:open-section", onOpen);
  }, [id]);

  return (
    <div id={id} className="scroll-mt-24 border-t border-[var(--line)]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-center gap-4 py-5 text-left"
      >
        <span className="text-lg font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-[var(--color-green)] sm:text-xl">
          {title}
        </span>
        <Plus
          size={16}
          strokeWidth={2.5}
          aria-hidden
          className={cn(
            "ml-auto shrink-0 text-[var(--sub)] transition-transform duration-300 group-hover:text-[var(--color-green)]",
            open && "rotate-45 text-[var(--color-green)]"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
            }
            className="overflow-hidden"
          >
            <div className="pb-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
