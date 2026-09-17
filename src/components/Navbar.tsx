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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        onLight
          ? "bg-[#f2f3ef]/80 text-[#10130f]"
          : "bg-[#0d100e]/75 text-[#eef0ea]",
        "backdrop-blur-xl",
        scrolled && "shadow-[0_1px_0_0_rgba(128,128,128,0.12)]"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[72rem] items-center gap-6 px-5 sm:px-8" aria-label="Primary">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3"
          aria-label="Back to top"
        >
          <LogoMark className="h-7 w-7 transition-colors duration-300 group-hover:bg-[var(--color-green)]" />
          <span className="hidden sm:block">
            <span className="block text-[13.5px] font-bold leading-none tracking-[-0.01em]">
              Joepeth Del Puerto
            </span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.22em] opacity-60">
              Dubai — UAE
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="ml-auto hidden items-center gap-0.5 lg:flex">
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
                    "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[12px] font-medium tracking-[-0.005em] transition-colors duration-200",
                    openMenu === item.section
                      ? "text-[var(--color-green)]"
                      : "hover:bg-[var(--chip)] hover:text-[var(--color-green)]"
                  )}
                  style={{
                    ["--chip" as string]: onLight
                      ? "rgba(16,19,15,0.05)"
                      : "rgba(238,240,234,0.07)",
                  }}
                >
                  {item.label}
                  <ChevronDown
                    size={12}
                    strokeWidth={2.5}
                    aria-hidden
                    className={cn(
                      "opacity-60 transition-transform duration-200",
                      openMenu === item.section && "rotate-180 opacity-100"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openMenu === item.section && (
                    <motion.div
                      role="menu"
                      initial={reduce ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: reduce ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "absolute left-1/2 top-full mt-2 w-60 -translate-x-1/2 rounded-2xl border p-1.5 shadow-2xl",
                        onLight
                          ? "border-[#10130f]/10 bg-white text-[#10130f] shadow-[#10130f]/10"
                          : "border-white/10 bg-[#141816] text-[#eef0ea] shadow-black/40"
                      )}
                    >
                      <button
                        role="menuitem"
                        onClick={() => go(item.section)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-[12px] font-semibold text-[var(--color-green)] transition-colors",
                          onLight ? "hover:bg-[#4f7a2e]/8" : "hover:bg-white/5"
                        )}
                      >
                        Overview
                        <span aria-hidden>↗</span>
                      </button>
                      <div className={cn("mx-3 my-1 border-t", onLight ? "border-[#10130f]/8" : "border-white/8")} />
                      {item.items.map((sub) => (
                        <button
                          key={sub.id}
                          role="menuitem"
                          onClick={() => go(item.section, sub.id)}
                          className={cn(
                            "block w-full rounded-xl px-3.5 py-2.5 text-left text-[12px] font-medium transition-colors",
                            onLight
                              ? "hover:bg-[#10130f]/5 hover:text-[#4f7a2e]"
                              : "hover:bg-white/5 hover:text-[var(--color-green)]"
                          )}
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
                className={cn(
                  "rounded-full px-3.5 py-2 text-[12px] font-medium tracking-[-0.005em] transition-colors duration-200 hover:text-[var(--color-green)]",
                  onLight ? "hover:bg-[#10130f]/5" : "hover:bg-white/7"
                )}
              >
                {item.label}
              </button>
            )
          )}
          <a
            href={`mailto:${profile.email}`}
            className="ml-3 rounded-full bg-[var(--color-green)] px-5 py-2.5 text-[12px] font-semibold tracking-wide text-[#0d100e] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(117,169,76,0.35)]"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="ml-auto rounded-full p-2 transition-colors hover:bg-white/7 lg:hidden"
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
            className="overflow-hidden bg-[#0d100e]/95 text-[#eef0ea] backdrop-blur-xl lg:hidden"
          >
            <div className="px-5 py-4">
              {navItems.map((item) =>
                item.items ? (
                  <div key={item.section}>
                    <div className="flex items-center">
                      <button
                        onClick={() => go(item.section)}
                        className="flex-1 rounded-xl py-3.5 text-left text-[15px] font-semibold tracking-[-0.01em]"
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
                        className="grid h-9 w-9 place-items-center rounded-full border border-white/10"
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
                            className="block w-full py-2 text-left text-[13px] font-medium text-[#9aa098] transition-colors hover:text-[var(--color-green)]"
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
                    className="block w-full py-3.5 text-left text-[15px] font-semibold tracking-[-0.01em]"
                  >
                    {item.label}
                  </button>
                )
              )}
              <a
                href={`mailto:${profile.email}`}
                className="mt-4 flex items-center justify-center rounded-full bg-[var(--color-green)] py-3.5 text-[13px] font-semibold tracking-wide text-[#0d100e]"
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
