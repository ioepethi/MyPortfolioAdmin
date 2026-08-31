"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/nav";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useActiveSection } from "./ui/useActiveSection";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";
import { ThemeToggle } from "./ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useLanguage();
  const ids = navItems.map((n) => n.id);
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <nav
            className={cn(
              "flex items-center justify-between rounded-full px-3 py-2 transition-all duration-500",
              scrolled
                ? "glass border-hair shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
                : "border border-transparent"
            )}
          >
            {/* Brand */}
            <button
              onClick={() => handleNav("home")}
              className="group flex items-center gap-2 rounded-full px-3 py-1.5 text-left"
              aria-label="Joepeth Del Puerto — home"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-fg)] text-sm font-bold text-[var(--color-bg)]">
                JD
              </span>
              <span className="hidden text-sm font-medium tracking-tight sm:block">
                Joepeth<span className="text-[var(--color-muted)]"> Del Puerto</span>
              </span>
            </button>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 border-x border-[var(--color-border)] px-4 md:flex">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.id)}
                      className={cn(
                        "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300",
                        isActive
                          ? "text-[var(--color-fg)]"
                          : "text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-white/[0.06] border-hair"
                          transition={
                            reduce
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 380, damping: 30 }
                          }
                        />
                      )}
                      <span className="relative">{t(item.labelKey)}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right cluster */}
            <div className="flex items-center gap-3 pl-2">
              <LanguageSwitcher />
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("contact");
                }}
                className="hidden items-center gap-1.5 rounded-full bg-[var(--color-fg)] px-4 py-2 text-sm font-medium text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
              >
                {t("nav.cta")}
                <ArrowUpRight size={15} strokeWidth={2} />
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label={t("nav.openMenu")}
                className="grid h-10 w-10 place-items-center rounded-full border-hair text-[var(--color-fg)] md:hidden"
              >
                <Menu size={18} strokeWidth={1.75} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              variants={reduce ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } } : undefined}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm border-l border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6"
              variants={
                reduce
                  ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
                  : {
                    hidden: { x: "100%" },
                    visible: { x: 0, transition: { type: "spring", stiffness: 320, damping: 34 } },
                    exit: { x: "100%", transition: { duration: 0.3 } },
                  }
              }
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[var(--color-muted)]">Menu</span>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    onClick={() => setOpen(false)}
                    aria-label={t("nav.closeMenu")}
                    className="grid h-10 w-10 place-items-center rounded-full border-hair text-[var(--color-fg)]"
                  >
                    <X size={18} strokeWidth={1.75} />
                  </button>
                </div>
              </div>

              <ul className="mt-8 flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const isActive = active === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      variants={
                        reduce
                          ? undefined
                          : {
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0, transition: { delay: 0.08 + i * 0.05 } },
                          }
                      }
                    >
                      <button
                        onClick={() => handleNav(item.id)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-lg font-medium transition-colors",
                          isActive
                            ? "bg-white/[0.05] text-[var(--color-fg)]"
                            : "text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                        )}
                      >
                        {t(item.labelKey)}
                        <ArrowUpRight size={16} strokeWidth={1.75} className="opacity-40" />
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("contact");
                }}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[var(--color-fg)] px-5 py-3 text-sm font-medium text-[var(--color-bg)]"
              >
                {t("nav.cta")}
                <ArrowUpRight size={15} strokeWidth={2} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
