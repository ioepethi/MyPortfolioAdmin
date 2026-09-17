"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left bg-[var(--color-green)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
