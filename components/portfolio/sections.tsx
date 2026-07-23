"use client";

import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Send,
} from "lucide-react";
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
} from "@/components/portfolio/portfolio-data";
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
  return (
    <MotionSection
      id="experience"
      eyebrow="Experience"
      title="A Timeline Of Engineering Work."
      description="Building practical AI systems, frontend experiences, and mobile products that solve real problems."
    >
      <div className="space-y-5">
        {experience.map((item, index) => (
          <motion.div
            key={`${item.role}-${item.company}`}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
          >
            <FuturisticCard>
              <CardContent className="grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-sm text-cyan-500 dark:text-cyan-300">{item.company}</p>
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground">{item.summary}</p>
                </div>
                <Badge variant="glass" className="h-fit gap-2">
                  <CalendarDays className="size-3.5" />
                  {item.period}
                </Badge>
              </CardContent>
            </FuturisticCard>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
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

export function ContactSection() {
  return (
    <MotionSection
      id="contact"
      eyebrow="Contact"
      title="Let’s build something intelligent, useful, and beautifully engineered."
      description="Open to AI engineering, data product, frontend, and Flutter opportunities."
      className="pb-28"
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
  );
}
