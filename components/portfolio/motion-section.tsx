"use client";

import { motion } from "framer-motion";
import type * as React from "react";

import { cn } from "@/lib/utils";

type MotionSectionProps = React.ComponentProps<"section"> & {
  eyebrow: string;
  title: string;
  description?: string;
};

export function MotionSection({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className)}
    >
      <div className="mb-10 max-w-3xl space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-500 dark:text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}
