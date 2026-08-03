"use client";

import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Send,
} from "lucide-react";
import type * as React from "react";
import { motion } from "framer-motion";

import { FuturisticCard } from "@/components/portfolio/futuristic-card";
import { MotionSection } from "@/components/portfolio/motion-section";
import {
  aboutHighlights,
  certificates,
  contactMethods,
  experience,
  posts,
  projects,
  sectionIcons,
  skills,
  socialLinks,
} from "@/components/portfolio/portfolio-data";
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

const listItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function AboutSection() {
  const Icon = sectionIcons.about;

  return (
    <MotionSection
      id="about"
      eyebrow="About"
      title="Building intelligent software with AI and modern technologies."
      description="I am a Full-Stack Developer and AI Engineer building scalable web, mobile, and intelligent applications using Python, Machine Learning, Data Science, modern frameworks, cloud technologies to solve real-world problems with efficient, user-focused, reliable solutions daily."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {aboutHighlights.map((item, index) => {
          const ItemIcon = item.icon;

          return (
            <motion.div
              key={item.label}
              variants={listItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
            >
              <FuturisticCard className="h-full">
                <CardContent className="space-y-5 p-6">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-white/15 bg-cyan-400/10 text-cyan-500 dark:text-cyan-300">
                    <ItemIcon className="size-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.label}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{item.value}</p>
                  </div>
                </CardContent>
              </FuturisticCard>
            </motion.div>
          );
        })}
      </div>
      <Icon className="absolute right-8 top-24 hidden size-16 text-cyan-300/10 lg:block" />
    </MotionSection>
  );
}

export function SkillsSection() {
  return (
    <MotionSection
      id="skills"
      eyebrow="Skills"
      title="AI-Powered Development Across The Stack."
      description="From machine learning models and data pipelines to a complete modern web and mobile applications, I build complete solutions that combine intelligence, performance, and user-focused design."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
            >
              <FuturisticCard className="h-full">
                <CardContent className="space-y-6 p-6">
                  <img
                    src={group.picture}
                    alt={`${group.title} preview`}
                    className="h-36 w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-violet-400/10 text-violet-400">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <Badge key={skill} variant="glass">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </FuturisticCard>
            </motion.div>
          );
        })}
      </div>
    </MotionSection>
  );
}

export function ProjectsSection() {
  return (
    <MotionSection
      id="projects"
      eyebrow="Projects"
      title="Real world solutions powered by modern technology."
      description="From AI applications to full-stack platforms, each project focuses on creating useful, scalable, and engaging experiences for users."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <FuturisticCard className="group h-full">
                <CardContent className="flex h-full flex-col gap-6 p-6">
                  <img
                    src={project.picture}
                    alt={`${project.title} preview`}
                    className="h-40 w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant="glass">{project.category}</Badge>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-white/15">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </FuturisticCard>
            </a>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  );
}

export function ExperienceSection() {
  return <ExperienceTimeline />;
}

// export function CertificatesSection() {
//   return (
//     <MotionSection
//       id="certificates"
//       eyebrow="Certificates"
//       title="Learning credentials that support the build practice."
//       description="A compact foundation across AI, machine learning, data science, cloud, and cross-platform development."
//     >
//       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
//         {certificates.map((certificate, index) => (
//           <motion.div
//             key={certificate}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
//           >
//             <FuturisticCard className="h-full">
//               <CardContent className="flex h-full flex-col gap-4 p-5">
//                 <CheckCircle2 className="size-5 text-emerald-400" />
//                 <p className="text-sm font-medium leading-6">{certificate}</p>
//               </CardContent>
//             </FuturisticCard>
//           </motion.div>
//         ))}
//       </div>
//     </MotionSection>
//   );
// }

// export function BlogSection() {
//   return (
//     <MotionSection
//       id="blog"
//       eyebrow="Blog"
//       title="Notes on AI systems, interfaces, and product engineering."
//       description="Short essays and field notes about making intelligent software practical and human-centered."
//     >
//       <div className="grid gap-5 lg:grid-cols-3">
//         {posts.map((post, index) => (
//           <motion.article
//             key={post.title}
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
//           >
//             <FuturisticCard className="group h-full">
//               <CardContent className="flex h-full flex-col gap-5 p-6">
//                 <Badge variant="glass">{post.meta}</Badge>
//                 <div className="space-y-3">
//                   <h3 className="text-xl font-semibold">{post.title}</h3>
//                   <p className="text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
//                 </div>
//                 <a
//                   href="#blog"
//                   className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-cyan-500 transition-colors hover:text-cyan-300"
//                 >
//                   Read note
//                   <ExternalLink className="size-4" />
//                 </a>
//               </CardContent>
//             </FuturisticCard>
//           </motion.article>
//         ))}
//       </div>
//     </MotionSection>
//   );
// }

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "github":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "facebook":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    default:
      return null;
  }
}

export function ContactSection() {
  return (
    <>
      <MotionSection
        id="contact"
        eyebrow="Contact"
        title="Let's build something intelligent, useful, and beautifully engineered."
        description="Open to AI engineering, data product, frontend, and Flutter opportunities."
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <FuturisticCard>
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-cyan-400/10 text-cyan-300">
                <Cpu className="size-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">Available for AI-focused work</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  Send a message for projects, collaborations, portfolio reviews, or roles involving
                  AI systems and modern application development.
                </p>
              </div>
             <Button asChild variant="glass" size="lg">
  <a href="mailto:bhuwavhatta@gmail.com">
    <Send className="size-4" />
    Send Email
  </a>
</Button>
            </CardContent>
          </FuturisticCard>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <FuturisticCard key={method.label}>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-cyan-300">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium">{method.label}</p>
                      <a
                        href={method.href}
                        className="block truncate text-sm text-muted-foreground transition-colors hover:text-cyan-300"
                      >
                        {method.value}
                      </a>
                    </div>
                  </CardContent>
                </FuturisticCard>
              );
            })}
          </div>
        </div>
      </MotionSection>

      {/* Footer with Social Links */}
      <footer className="relative mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative border-t border-white/10 pt-10">
          {/* Social icons */}
          <div className="mb-6 flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                aria-label={link.label}
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
