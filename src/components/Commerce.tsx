"use client";

import { ArrowDown } from "lucide-react";
import { Reveal, Stagger } from "./ui/Reveal";
import { SectionHead } from "./ui/SectionHead";

const chain = [
  "Product Data",
  "Catalog",
  "Content",
  "Visual",
  "SEO",
  "Merchandising",
  "Customer",
  "Order",
  "Reporting",
];

const areas = [
  "Product listings",
  "Catalog management",
  "Inventory tracking",
  "Order processing",
  "Customer service",
  "Merchandising",
  "Marketplace content",
  "Excel reporting",
];

export function Commerce() {
  return (
    <section id="commerce" data-nav="light" className="t-light">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead index="04" label="Commerce" />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display-lg uppercase">
                I understand
                <br />
                the product
                <br />
                <span className="text-[var(--sub)]">before I design</span>
                <br />
                the experience.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-10 max-w-lg text-pretty text-sm leading-relaxed text-[var(--mut)] sm:text-base">
                E-commerce is where design, data and operations meet. I&apos;ve
                worked the full chain — product data, catalog, content, visuals,
                SEO, merchandising, orders and reporting — across Shopify, Noon
                and Amazon FBA, so the experiences I build start from how the
                product actually sells.
              </p>
            </Reveal>
            <Stagger className="mt-8 flex max-w-lg flex-wrap gap-2" gap={0.04}>
              {areas.map((a) => (
                <li
                  key={a}
                  className="list-none border border-[var(--line)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--mut)]"
                >
                  {a}
                </li>
              ))}
            </Stagger>
          </div>

          {/* Chain diagram */}
          <div className="lg:col-span-5">
            <Stagger gap={0.05}>
              {chain.map((step, i) => (
                <li key={step} className="flex list-none flex-col items-start">
                  <div className="flex w-full items-baseline justify-between border border-[var(--line)] bg-[var(--card)] px-5 py-4">
                    <span className="text-sm font-bold uppercase tracking-tight sm:text-base">
                      {step}
                    </span>
                    <span className="font-mono text-xs text-[var(--color-green-deep)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {i < chain.length - 1 && (
                    <ArrowDown
                      size={14}
                      strokeWidth={2}
                      className="my-1 ml-6 text-[var(--color-green-deep)]"
                      aria-hidden
                    />
                  )}
                </li>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
