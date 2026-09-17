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
    }, 140);
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
      className={cn(theme === "light" ? "t-light" : "t-dark")}
    >
      <div className="mx-auto max-w-[72rem] px-5 sm:px-8">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            "group -mx-4 flex w-[calc(100%+2rem)] items-center gap-4 rounded-2xl px-4 py-7 text-left transition-colors duration-300 sm:-mx-5 sm:w-[calc(100%+2.5rem)] sm:gap-5 sm:px-5 sm:py-8",
            "hover:bg-[var(--tint)]"
          )}
        >
          <span className="font-mono text-[13px] font-medium text-[var(--color-green)]">
            {index}
          </span>
          <span className="text-[clamp(1.5rem,3.6vw,2.5rem)] font-bold leading-none tracking-[-0.025em]">
            {title}
          </span>
          <span
            aria-hidden
            className={cn(
              "ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300",
              open
                ? "border-[var(--color-green)] bg-[var(--color-green)] text-[#0d100e]"
                : "border-[var(--line-strong)] text-[var(--sub)] group-hover:border-[var(--color-green)] group-hover:text-[var(--color-green)]"
            )}
          >
            <ChevronDown
              size={17}
              strokeWidth={2.25}
              className={cn("transition-transform duration-300", open && "rotate-180")}
            />
          </span>
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
            <div className="mx-auto max-w-[72rem] px-5 pb-16 sm:px-8">
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
    <div id={id} className="scroll-mt-24 rounded-xl border border-[var(--line)] bg-[var(--card)]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          "group flex w-full items-center gap-4 rounded-xl px-5 py-4.5 text-left transition-colors duration-200",
          "hover:bg-[var(--card-hover)]"
        )}
      >
        <span className="text-[15px] font-semibold tracking-[-0.01em]">
          {title}
        </span>
        <span
          aria-hidden
          className={cn(
            "ml-auto grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
            open
              ? "border-[var(--color-green)] text-[var(--color-green)]"
              : "border-[var(--line-strong)] text-[var(--sub)] group-hover:border-[var(--color-green)] group-hover:text-[var(--color-green)]"
          )}
        >
          <Plus
            size={13}
            strokeWidth={2.5}
            className={cn("transition-transform duration-300", open && "rotate-45")}
          />
        </span>
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
            <div className="px-5 pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
