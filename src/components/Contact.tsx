"use client";

import { motion, useReducedMotion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { profile } from "@/data/profile";
import { SocialLinks } from "./ui/SocialLinks";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const details = [
    {
      icon: Mail,
      label: t("contact.emailLabel"),
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: t("contact.phoneLabel"),
      value: profile.phone,
      href: profile.phoneHref,
    },
    {
      icon: MapPin,
      label: t("contact.locationLabel"),
      value: profile.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border-hair bg-[var(--color-surface)]/60 p-8 sm:p-12 lg:p-16">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-[var(--color-navy)]/40 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left: headline + CTA */}
            <div className="flex flex-col gap-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  <span className="h-px w-8 bg-[var(--color-accent)]/60" />
                  {t("contact.eyebrow")}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                  {t("contact.heading")}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-xl text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                  {t("contact.body")}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-fg)] px-6 py-3.5 text-sm font-medium text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {t("contact.cta")}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Reveal>
            </div>

            {/* Right: contact details + socials */}
            <div className="flex flex-col gap-3">
              {details.map((d, i) => {
                const Icon = d.icon;
                const content = (
                  <motion.div
                    key={d.label}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={
                      reduce
                        ? { duration: 0.3 }
                        : { duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }
                    }
                    className="flex items-center gap-4 rounded-2xl border-hair bg-white/[0.02] p-4 transition-colors duration-300 hover:bg-white/[0.04]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <Icon size={17} strokeWidth={1.75} />
                    </span>
                    <div className="flex min-w-0 flex-col">
                      <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-subtle)]">
                        {d.label}
                      </span>
                      <span className="truncate text-sm font-medium text-[var(--color-fg)]">
                        {d.value}
                      </span>
                    </div>
                  </motion.div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}

              <div className="mt-4 flex flex-col gap-3">
                <span className="text-xs uppercase tracking-[0.15em] text-[var(--color-subtle)]">
                  {t("contact.connectHeading")}
                </span>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
