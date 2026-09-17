"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { useActiveSection } from "./ui/useActiveSection";
import { cn } from "@/lib/utils";

/**
 * Fixed editorial navigation. Reads `data-nav="light|dark"` on sections and
 * flips its own scheme so the bar always matches the surface beneath it.
 */
export function Navbar() {
  const ids = navItems.map((n) => n.id);
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav]")
    );
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const probe = 52;
      let light = false;
      // Innermost element wins — nested bands (e.g. dark band inside a light
      // section) come later in DOM order and override their parent.
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) {
          light = s.dataset.nav === "light";
        }
      }
      setOnLight(light);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el)
      el.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled &&
          (onLight
            ? "bg-[#f4f4f0]/85 text-[#0b0d0c] backdrop-blur-md border-b border-black/10"
            : "bg-[#0b0d0c]/80 text-[#f4f4f0] backdrop-blur-md border-b border-white/10"),
          !scrolled && (onLight ? "text-[#0b0d0c]" : "text-[#f4f4f0]")
        )}
      >
        <nav className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8">
          {/* Brand */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
            }}
            className="group flex items-center gap-3"
            aria-label="Joepeth Del Puerto — back to top"
          >
            <span
              aria-hidden
              className="block h-8 w-8 bg-current transition-colors duration-300 group-hover:bg-[var(--color-green)]"
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
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-[13px] font-bold tracking-tight">
                JOEPETH DEL PUERTO
              </span>
              <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] opacity-60">
                Dubai — UAE
              </span>
            </span>
          </a>

          {/* Center links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.id);
                    }}
                    className={cn(
                      "group relative text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                      isActive ? "text-[var(--color-green)]" : "opacity-70 hover:opacity-100"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-px bg-[var(--color-green)] transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("contact");
              }}
              className="group hidden items-center gap-2 border border-[var(--color-green)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-green)] transition-colors duration-300 hover:bg-[var(--color-green)] hover:text-[#0b0d0c] sm:inline-flex"
            >
              Let&apos;s Talk
              <ArrowUpRight
                size={13}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center border border-current/30 lg:hidden"
            >
              <Menu size={17} strokeWidth={1.75} />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-[#0b0d0c] text-[#f4f4f0]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.1 : 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-16 items-center justify-between border-b border-white/10 px-5 sm:px-8">
              <span className="label flex items-center gap-2.5 !text-[#f4f4f0]/60">
                <span
                  aria-hidden
                  className="block h-5 w-5 bg-current"
                  style={{
                    WebkitMaskImage: "url(/logo.png)",
                    maskImage: "url(/logo.png)",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                  }}
                />
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center border border-white/20"
              >
                <X size={17} strokeWidth={1.75} />
              </button>
            </div>

            <ul className="flex flex-1 flex-col justify-center px-6 sm:px-10">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.06 + i * 0.05,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-white/10"
                >
                  <button
                    onClick={() => handleNav(item.id)}
                    className="group flex w-full items-baseline justify-between py-4 text-left"
                  >
                    <span className="display-sm transition-colors duration-300 group-hover:text-[var(--color-green)]">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-[var(--color-green)]">
                      0{i + 1}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="border-t border-white/10 px-6 py-6 sm:px-10">
              <div className="flex flex-col gap-1 text-sm text-[#f4f4f0]/70">
                <a href={`mailto:${profile.email}`} className="hover:text-[var(--color-green)]">
                  {profile.email}
                </a>
                <a href={profile.phoneHref} className="hover:text-[var(--color-green)]">
                  {profile.phone}
                </a>
                <span>{profile.location}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
