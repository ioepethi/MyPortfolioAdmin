"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, openSection } from "@/data/nav";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("block bg-current", className)}
      style={{
        WebkitMaskImage: "url(/logo.png)",
        maskImage: "url(/logo.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);

  // Theme probe — flip nav colors to match the section beneath it.
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav]")
    );
    let raf = 0;
    const update = () => {
      const probe = 48;
      let light = false;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) light = s.dataset.nav === "light";
      }
      setOnLight(light);
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Close menus on outside click / Escape.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const go = (section: string, sub?: string) => {
    setOpenMenu(null);
    setMobileOpen(false);
    const isPanel = navItems.find((n) => n.section === section)?.items;
    if (isPanel) openSection(section, sub);
    else document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        onLight
          ? "bg-[#f4f4f0]/85 text-[#0b0d0c]"
          : "bg-[#0b0d0c]/85 text-[#f4f4f0]",
        "backdrop-blur-md",
        scrolled && (onLight ? "border-b border-[#0b0d0c]/15" : "border-b border-white/15")
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[90rem] items-center gap-6 px-5 sm:px-8" aria-label="Primary">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3"
          aria-label="Back to top"
        >
          <LogoMark className="h-7 w-7 transition-colors duration-300 group-hover:bg-[var(--color-green)]" />
          <span className="hidden sm:block">
            <span className="block text-[13px] font-extrabold uppercase leading-none tracking-tight">
              Joepeth Del Puerto
            </span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] opacity-60">
              Dubai — UAE
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="ml-auto hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.items ? (
              <div key={item.section} className="relative">
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={openMenu === item.section}
                  onClick={() =>
                    setOpenMenu((m) => (m === item.section ? null : item.section))
                  }
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 hover:text-[var(--color-green)]",
                    openMenu === item.section && "text-[var(--color-green)]"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    size={12}
                    strokeWidth={2.5}
                    aria-hidden
                    className={cn(
                      "transition-transform duration-200",
                      openMenu === item.section && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openMenu === item.section && (
                    <motion.div
                      role="menu"
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
                      transition={{ duration: reduce ? 0 : 0.18 }}
                      className={cn(
                        "absolute left-1/2 top-full mt-1 w-64 -translate-x-1/2 border py-1 shadow-2xl",
                        onLight
                          ? "border-[#0b0d0c]/15 bg-white text-[#0b0d0c]"
                          : "border-white/15 bg-[#171a18] text-[#f4f4f0]"
                      )}
                    >
                      <button
                        role="menuitem"
                        onClick={() => go(item.section)}
                        className="flex w-full items-center justify-between px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-green)] transition-colors hover:bg-[var(--color-green)]/10"
                      >
                        Overview
                        <span aria-hidden>→</span>
                      </button>
                      <div className={cn("mx-4 my-1 border-t", onLight ? "border-[#0b0d0c]/10" : "border-white/10")} />
                      {item.items.map((sub) => (
                        <button
                          key={sub.id}
                          role="menuitem"
                          onClick={() => go(item.section, sub.id)}
                          className="block w-full px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-[var(--color-green)]/10 hover:text-[var(--color-green)]"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={item.section}
                onClick={() => go(item.section)}
                className="px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 hover:text-[var(--color-green)]"
              >
                {item.label}
              </button>
            )
          )}
          <a
            href={`mailto:${profile.email}`}
            className="ml-3 border border-[var(--color-green)] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-green)] transition-colors duration-300 hover:bg-[var(--color-green)] hover:text-[#0b0d0c]"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="ml-auto p-2 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu — compact accordion list */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#0b0d0c] text-[#f4f4f0] lg:hidden"
          >
            <div className="px-5 py-3">
              {navItems.map((item) =>
                item.items ? (
                  <div key={item.section} className="border-b border-white/5">
                    <div className="flex items-center">
                      <button
                        onClick={() => go(item.section)}
                        className="flex-1 py-3.5 text-left text-sm font-bold uppercase tracking-[0.12em]"
                      >
                        {item.label}
                      </button>
                      <button
                        onClick={() =>
                          setMobileExpanded((m) =>
                            m === item.section ? null : item.section
                          )
                        }
                        aria-expanded={mobileExpanded === item.section}
                        aria-label={`Expand ${item.label}`}
                        className="grid h-9 w-9 place-items-center border border-white/15"
                      >
                        <ChevronDown
                          size={15}
                          className={cn(
                            "text-[var(--color-green)] transition-transform duration-200",
                            mobileExpanded === item.section && "rotate-180"
                          )}
                        />
                      </button>
                    </div>
                    {mobileExpanded === item.section && (
                      <div className="pb-3 pl-4">
                        {item.items.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => go(item.section, sub.id)}
                            className="block w-full py-2 text-left text-xs font-semibold uppercase tracking-[0.14em] text-[#a3a8a2] transition-colors hover:text-[var(--color-green)]"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.section}
                    onClick={() => go(item.section)}
                    className="block w-full border-b border-white/5 py-3.5 text-left text-sm font-bold uppercase tracking-[0.12em]"
                  >
                    {item.label}
                  </button>
                )
              )}
              <a
                href={`mailto:${profile.email}`}
                className="my-4 flex items-center justify-center border border-[var(--color-green)] py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-green)]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
