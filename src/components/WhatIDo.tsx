"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Plus } from "lucide-react";
import { Reveal, Stagger } from "./ui/Reveal";
import { SectionHead } from "./ui/SectionHead";
import { cn } from "@/lib/utils";

type Discipline = {
  title: string;
  line: string;
  headline?: string;
  problem: string;
  solution: string;
  deliverable: string;
  flow: string[];
  tools: string[];
  examples?: string[];
  note?: string;
};

const disciplines: Discipline[] = [
  {
    title: "Graphic Design",
    line: "Visual communication built to inform, sell and support — not decorate.",
    problem:
      "Products and services fail to communicate value when visuals are inconsistent or unclear.",
    solution:
      "Design each asset around the message it must carry — hierarchy first, decoration second.",
    deliverable: "Production-ready visual assets",
    flow: ["Problem", "Understand", "Concept", "Design", "Refine", "Deliver"],
    tools: ["Adobe Creative Suite", "Adobe Illustrator", "Canva"],
    examples: [
      "Product graphics",
      "E-commerce banners",
      "Promotional visuals",
      "Social media graphics",
      "Website visual assets",
      "Product listing imagery",
      "Presentation design",
      "Brand-supporting graphics",
    ],
    note: "Example work shown in this portfolio is labeled portfolio sample or speculative design — never presented as paid client work.",
  },
  {
    title: "E-Commerce",
    line: "From product data to customer experience.",
    headline: "From product data to customer experience.",
    problem:
      "A product only sells online when its data, content, visuals and merchandising all line up.",
    solution:
      "Own the full chain — listing, content, SEO, pricing, inventory and reporting — so nothing breaks between the spreadsheet and the customer.",
    deliverable: "Optimized listings & reporting",
    flow: [
      "Product",
      "Content",
      "Visuals",
      "SEO",
      "Merchandising",
      "Customer Experience",
      "Reporting",
    ],
    tools: ["Shopify", "Noon", "Amazon FBA", "Excel", "Canva", "Adobe Illustrator"],
    examples: [
      "Product title optimization",
      "Product descriptions",
      "Specifications",
      "Pricing",
      "Inventory",
      "Product images",
      "SEO",
      "Marketplace content",
      "Promotional content",
      "Excel reporting",
      "Performance analysis",
    ],
  },
  {
    title: "Digital Experience",
    line: "How I think about digital products.",
    problem:
      "Digital products fail when they are built around screens instead of the job the user is trying to do.",
    solution:
      "Structure the information and workflow first, then design and build the experience around it — tested against real use.",
    deliverable: "Working digital experience",
    flow: ["Discover", "Define", "Structure", "Design", "Build", "Test", "Improve"],
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
    note: "Evidence: U-Office, Edge Plus Fitness POS, BrandPeth.ae — see Selected Work.",
  },
  {
    title: "Systems & IT",
    line: "I don't just use systems. I understand how they work.",
    headline: "I don't just use systems. I understand how they work.",
    problem:
      "Most operational problems are system problems — bad data, broken workflows, tools nobody fully understands.",
    solution:
      "A BS in Information Technology (Database Management) plus years of hands-on IT support — troubleshooting, databases, records and digital workflows — means I can diagnose the system, not just the symptom.",
    deliverable: "Systems that stay reliable",
    flow: ["Diagnose", "Structure", "Automate", "Document", "Maintain"],
    tools: ["Databases", "Digital workflows", "Automation", "Web technologies", "Records management"],
    note: "Presented as a technical advantage across my work — not a claim of senior software engineering.",
  },
  {
    title: "Project Management",
    line: "I don't start with the tool. I start with the problem.",
    headline: "I don't start with the tool. I start with the problem.",
    problem:
      "Projects drift when execution starts before the problem and requirement are actually defined.",
    solution:
      "Problem → requirement → solution → execution → result. Every build starts with the problem statement, not the tech stack.",
    deliverable: "A documented, usable result",
    flow: [
      "Understand the problem",
      "Define the requirement",
      "Plan the work",
      "Build / Design",
      "Test",
      "Refine",
      "Deliver",
      "Document",
      "Improve",
    ],
    tools: ["Planning", "Coordination", "Documentation", "Reporting"],
    note: "Evidence: U-Office — taken from office problem to a system in daily operational use.",
  },
  {
    title: "Process Improvement",
    line: "The problem is not always the tool.",
    headline: "The problem is not always the tool.",
    problem:
      "Teams reach for new tools before understanding what is actually broken — so friction survives the migration.",
    solution:
      "Ask first: What is not working? Who is affected? What information is missing? Where is the bottleneck? What can be simplified? What should be automated? What should remain human? How will success be measured?",
    deliverable: "Simpler, measurable workflows",
    flow: ["Think", "Structure", "Build", "Measure", "Improve"],
    tools: ["Excel", "Power Automate", "Microsoft Lists", "n8n", "Documentation"],
  },
];

function Flow({ steps, dark }: { steps: string[]; dark?: boolean }) {
  return (
    <ol className="flex flex-wrap items-center gap-y-3">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center">
          <span
            className={cn(
              "border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em]",
              dark
                ? "border-white/20 text-[#f4f4f0]"
                : "border-black/20 text-[#0b0d0c]"
            )}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight
              size={12}
              strokeWidth={2}
              className="mx-1.5 shrink-0 text-[var(--color-green)]"
              aria-hidden
            />
          )}
        </li>
      ))}
    </ol>
  );
}

function DisciplineRow({ d, index }: { d: Discipline; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = `discipline-panel-${index}`;

  return (
    <div className="hairline-b">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left sm:gap-8 sm:py-8"
      >
        <span className="font-mono text-sm text-[var(--color-green-deep)]">
          0{index + 1}
        </span>
        <span>
          <span
            className={cn(
              "display-sm block uppercase transition-colors duration-300",
              open ? "text-[var(--color-green-deep)]" : "group-hover:text-[var(--color-green-deep)]"
            )}
          >
            {d.title}
          </span>
          <span className="mt-2 block max-w-xl text-sm text-[var(--mut)]">
            {d.line}
          </span>
        </span>
        <span className="flex items-center gap-4">
          <span className="label hidden sm:inline-flex items-center gap-1.5">
            Learn more
            <ArrowRight size={12} strokeWidth={2.5} aria-hidden />
          </span>
          <Plus
            size={20}
            strokeWidth={2}
            aria-hidden
            className={cn(
              "shrink-0 transition-transform duration-300",
              open && "rotate-45 text-[var(--color-green-deep)]"
            )}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mb-10 grid grid-cols-1 gap-px bg-[var(--line)] lg:grid-cols-3">
              {/* Problem / solution / deliverable */}
              <div className="bg-[#0b0d0c] p-6 text-[#f4f4f0] sm:p-8">
                <span className="label label-green">Problem</span>
                <p className="mt-4 text-sm leading-relaxed text-[#f4f4f0]/80">
                  {d.problem}
                </p>
                <span className="label label-green mt-8 block">Solution</span>
                <p className="mt-4 text-sm leading-relaxed text-[#f4f4f0]/80">
                  {d.solution}
                </p>
              </div>

              <div className="bg-[#0b0d0c] p-6 text-[#f4f4f0] sm:p-8">
                <span className="label label-green">Workflow</span>
                <div className="mt-5">
                  <Flow steps={d.flow} dark />
                </div>
                <span className="label mt-8 block !text-[#f4f4f0]/50">
                  Deliverable
                </span>
                <p className="mt-3 text-lg font-bold uppercase tracking-tight">
                  {d.deliverable}
                </p>
              </div>

              <div className="bg-[#0b0d0c] p-6 text-[#f4f4f0] sm:p-8">
                <span className="label label-green">Tools</span>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {d.tools.map((t) => (
                    <li
                      key={t}
                      className="border border-white/15 px-2.5 py-1 text-[11px] font-medium text-[#f4f4f0]/85"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {d.examples && (
                  <>
                    <span className="label mt-7 block !text-[#f4f4f0]/50">
                      Scope
                    </span>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                      {d.examples.map((e) => (
                        <li key={e} className="text-xs text-[#f4f4f0]/70">
                          {e}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {d.note && (
                  <p className="mt-7 border-l-2 border-[var(--color-green)] pl-3 text-xs leading-relaxed text-[#f4f4f0]/60">
                    {d.note}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function WhatIDo() {
  return (
    <section id="what" data-nav="light" className="t-light">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead index="02" label="What I Do" />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h2 className="display-md max-w-3xl uppercase">
              Six disciplines.{" "}
              <span className="text-[var(--sub)]">One way of working:</span>{" "}
              understand the problem, then build the answer.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:pt-4">
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-[var(--mut)]">
              Not a list of services — the disciplines I actually work across,
              each with its own workflow, tools and deliverable. Expand any row
              to see how I approach it.
            </p>
          </Reveal>
        </div>

        {/* My Solution Mindset — semantic dropdown in the section header area */}
        <Reveal className="mt-12">
          <details className="hairline group/details">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 sm:px-8 [&::-webkit-details-marker]:hidden">
              <span className="flex items-baseline gap-4">
                <span className="label label-green">My Solution Mindset</span>
                <span className="display-sm uppercase">
                  The problem is not always{" "}
                  <span className="text-[var(--color-green-deep)]">the tool.</span>
                </span>
              </span>
              <Plus
                size={20}
                strokeWidth={2}
                aria-hidden
                className="shrink-0 transition-transform duration-300 group-open/details:rotate-45 group-open/details:text-[var(--color-green-deep)]"
              />
            </summary>
            <div className="grid grid-cols-1 gap-px bg-[var(--line)] lg:grid-cols-2">
              <div className="bg-[#0b0d0c] p-6 text-[#f4f4f0] sm:p-8">
                <span className="label label-green">I first understand</span>
                <ul className="mt-5">
                  {[
                    "What is not working?",
                    "Who is affected?",
                    "What information is missing?",
                    "Where is the bottleneck?",
                    "What can be simplified?",
                    "What should be automated?",
                    "What should remain human?",
                    "How will success be measured?",
                  ].map((q) => (
                    <li
                      key={q}
                      className="flex items-center justify-between border-b border-white/10 py-3 text-sm font-medium"
                    >
                      {q}
                      <ArrowDown
                        size={13}
                        strokeWidth={2}
                        className="rotate-[-90deg] text-[var(--color-green)]"
                        aria-hidden
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between bg-[#0b0d0c] p-6 text-[#f4f4f0] sm:p-8">
                <div>
                  <span className="label label-green">Then</span>
                  <div className="mt-5">
                    <Flow
                      steps={["Think", "Structure", "Build", "Measure", "Improve"]}
                      dark
                    />
                  </div>
                </div>
                <p className="mt-8 border-l-2 border-[var(--color-green)] pl-3 text-sm leading-relaxed text-[#f4f4f0]/70">
                  I don&apos;t start with the tool. I start with the problem —
                  then structure it, build the answer, measure it, and improve it.
                </p>
              </div>
            </div>
          </details>
        </Reveal>

        <Stagger className="hairline-t mt-14" gap={0.06}>
          {disciplines.map((d, i) => (
            <DisciplineRow key={d.title} d={d} index={i} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
