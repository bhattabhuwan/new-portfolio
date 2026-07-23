"use client";

import { ArrowDownToLine, FolderKanban, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

const roles = ["AI Solutions Developer"];

const actions = [
  {
    label: "View Projects",
    href: "#projects",
    icon: FolderKanban,
  },
  {
    label: "Download Resume",
    href: "/resume.pdf",
    icon: ArrowDownToLine,
  },
  {
    label: "Contact Me",
    href: "#contact",
    icon: Mail,
  },
];

export function SplineSceneBasic({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-black px-4 py-12 sm:px-6 lg:px-8",
        className,
      )}
    >
      <Spotlight
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 blur-md"
        fill="white"
        size={84}
      />

      <div className="mx-auto grid min-h-[calc(100vh-11rem)] w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -72, y: 24 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 order-1 flex flex-col justify-center pt-10 lg:pt-0"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
          Portfolio
          </p>

          <h1 className="bg-gradient-to-b from-neutral-50 via-neutral-200 to-neutral-500 bg-clip-text text-5xl font-bold leading-none text-transparent sm:text-6xl lg:text-7xl">
            Bhuwan Bhatt
          </h1>

          <div className="mt-6 space-y-1 text-base text-neutral-300 sm:text-lg">
            {roles.map((role) => (
              <p key={role}>{role}</p>
            ))}
          </div>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg">
          Designing, developing and deploying AI-powered products with modern web and mobile technologies, creating intelligent solutions through machine learning, data science and innovation.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions.map((action, index) => {
              const Icon = action.icon;

              return (
                <motion.div
                  key={action.label}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    delay: index * 0.22,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Button asChild variant="glass" size="lg" className="w-full sm:w-auto">
                    <a href={action.href}>
                      <Icon className="size-4" />
                      {action.label}
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 72, y: 24 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-2 h-[320px] min-h-[320px] w-full overflow-visible sm:h-[430px] lg:h-[620px]"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
