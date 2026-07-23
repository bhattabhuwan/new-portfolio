"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { experience } from "@/components/portfolio/portfolio-data";

type ExperienceItem = (typeof experience)[number];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cardVariants: any = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -80 : 80,
    y: 40,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      mass: 1.2,
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nodeVariants: any = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.1,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function FloatingOrb({
  className,
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full opacity-30 blur-3xl ${className}`}
      style={{ width: size, height: size }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}

function ParticleField() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 3,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function TimelineNode({ index }: { index: number }) {
  return (
    <motion.div
      className="relative z-10 flex size-6 shrink-0 items-center justify-center"
      variants={nodeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div
        className="size-6 rounded-full border-2 border-cyan-400 bg-[#050816] shadow-[0_0_20px_rgba(0,229,255,0.5)]"
        animate={{
          boxShadow: [
            "0 0 20px rgba(0,229,255,0.5)",
            "0 0 40px rgba(0,229,255,0.8)",
            "0 0 20px rgba(0,229,255,0.5)",
          ],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      />
    </motion.div>
  );
}

function ExperienceCard({
  item,
  direction,
}: {
  item: ExperienceItem;
  direction: "left" | "right";
}) {
  return (
    <motion.div
      className={`w-full ${direction === "right" ? "lg:pl-12" : "lg:pr-12"}`}
      custom={direction}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.div
        className="group relative overflow-hidden rounded-2xl border border-cyan-500/15 bg-[rgba(15,23,42,0.75)] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.2)]"
        whileHover={{
          boxShadow: "0 0 50px rgba(0,229,255,0.3)",
          borderColor: "rgba(0,229,255,0.5)",
          transition: { duration: 0.4, ease: "easeOut" },
        }}
      >
        {/* Glow overlay on hover */}
        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top gradient line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* Date badge - top right */}
        <div className="absolute right-6 top-6">
          <Badge
            variant="outline"
            className="flex items-center gap-1.5 rounded-full border-cyan-500/30 bg-white/5 px-3 py-1.5 text-xs text-cyan-300 backdrop-blur-sm"
          >
            <CalendarDays className="size-3.5" />
            {item.period}
          </Badge>
        </div>

        {/* Card content */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-xl font-semibold text-white">{item.role}</h3>
            <p className="text-base font-medium text-cyan-400">{item.company}</p>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">{item.summary}</p>

          {/* Tech stack badges */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-cyan-500/25 bg-transparent px-3 py-1 text-xs font-medium text-cyan-300/80 transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-200 hover:shadow-[0_0_12px_rgba(0,229,255,0.2)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background effects */}
      <FloatingOrb
        className="-top-10 left-1/4 bg-cyan-500/20"
        size={200}
      />
      <FloatingOrb
        className="bottom-20 right-1/4 bg-cyan-400/15"
        size={160}
      />
      <FloatingOrb
        className="top-1/3 right-10 bg-purple-500/10"
        size={140}
      />
      <ParticleField />

      {/* Section header */}
      <motion.div
        className="relative z-10 mb-14 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
          A Timeline Of Engineering Work.
        </h2>
        <p className="mt-3 text-base leading-7 text-gray-400 sm:text-lg">
          Building practical AI systems, frontend experiences, and mobile products that solve real problems.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Desktop: center timeline | Tablet: left | Mobile: left */}
        <div className="relative mx-auto flex max-w-5xl flex-col">
          {/* Timeline line - centered on desktop, left on tablet/mobile */}
          <div
            ref={timelineRef}
            className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/20 via-cyan-400/20 to-cyan-500/20 lg:left-1/2 lg:-translate-x-1/2"
          >
            {/* Animated fill line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 via-cyan-300 to-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.5)]"
              style={{ height: timelineHeight }}
            />
          </div>

          {/* Timeline items */}
          <motion.div
            className="relative flex flex-col gap-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.role}-${item.company}`}
                  className="relative flex items-start"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  {/* Desktop layout */}
                  <div className="flex w-full items-start gap-8 lg:gap-0">
                    {/* Left card */}
                    <div
                      className={`hidden w-[calc(50%-20px)] lg:block ${
                        isLeft ? "" : "invisible"
                      }`}
                    >
                      {isLeft && (
                        <ExperienceCard
                          item={item}
                          direction="left"
                        />
                      )}
                    </div>

                    {/* Timeline node area */}
                    <div className="relative z-10 flex shrink-0 flex-col items-center lg:w-10">
                      {/* Connector line from card to node */}
                      <div
                        className={`hidden h-0.5 w-8 bg-gradient-to-r from-cyan-400/30 to-cyan-400/60 lg:block ${
                          isLeft
                            ? "translate-x-4"
                            : "-translate-x-4 scale-x-[-1]"
                        }`}
                      />
                      <TimelineNode index={index} />
                    </div>

                    {/* Right card - desktop */}
                    <div
                      className={`hidden w-[calc(50%-20px)] lg:block ${
                        isLeft ? "invisible" : ""
                      }`}
                    >
                      {!isLeft && (
                        <ExperienceCard
                          item={item}
                          direction="right"
                        />
                      )}
                    </div>

                    {/* Mobile/Tablet - always on right */}
                    <div className="block w-full lg:hidden">
                      <ExperienceCard
                        item={item}
                        direction="right"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
