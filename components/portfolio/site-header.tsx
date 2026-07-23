"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { navItems } from "@/components/portfolio/portfolio-data";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8"
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-background/70 px-4 shadow-xl shadow-cyan-950/10 backdrop-blur-xl">
        <a href="#" className="text-sm font-semibold tracking-[0.22em] text-cyan-500 dark:text-cyan-300">
          Bhuwan Bhatt
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button asChild variant="glass" size="sm">
          <a href="#contact">Contact</a>
        </Button>
      </nav>
    </motion.header>
  );
}
