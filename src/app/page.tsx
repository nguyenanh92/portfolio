import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MagneticWrapper } from "@/components/magnetic-wrapper";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

// Categorize skills static grouping
const SKILL_CATEGORIES = [
  {
    name: "Languages",
    skills: ["Javascript", "Typescript", "C#", "Python"],
  },
  {
    name: "Frontend Stack",
    skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "React Native", "TailwindCSS", "Shadcn UI", "Ant Design", "Bootstrap"],
  },
  {
    name: "Backend & Database",
    skills: ["Node.js", ".Net Core", ".NET Framework", "MSSQL", "MongoDB", "Prisma", "Supabase"],
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["Docker", "Kubernetes", "Firebase", "Clerk", "Vercel", "Netlify"],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Sticky Profile & Navigation Sidebar */}
        <aside className="lg:sticky lg:top-24 h-fit flex flex-col space-y-8 pb-8 lg:pb-0">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col space-y-6">
              
              {/* Availability Pulse status */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                  Available for contracts
                </span>
              </div>

              {/* Profile Avatar and Name */}
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-6">
                <Avatar className="size-24 lg:size-32 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40 p-1 bg-white/50 dark:bg-zinc-900/50 shadow-md">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="rounded-xl object-cover" />
                  <AvatarFallback className="rounded-xl text-lg font-mono">{DATA.initials}</AvatarFallback>
                </Avatar>
                
                <div className="space-y-1">
                  <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tighter leading-none text-foreground font-sans">
                    {DATA.name}
                  </h1>
                  <p className="text-sm font-mono text-primary font-medium">
                    Software Engineer / Full-Stack
                  </p>
                </div>
              </div>

              {/* Short Bio Description */}
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[40ch]">
                {DATA.description}
              </p>

              {/* Technical Details Monospace Block */}
              <div className="space-y-2.5 font-mono text-xs pt-6 border-t border-zinc-200/60 dark:border-zinc-800/40">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="text-foreground font-medium">{DATA.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <Link href={`mailto:${DATA.contact.email}`} className="text-primary hover:underline font-medium">
                    {DATA.contact.email}
                  </Link>
                </div>
              </div>

              {/* Social Navigation Wrapper */}
              <div className="flex gap-2 pt-2">
                {Object.entries(DATA.contact.social)
                  .filter(([_, s]) => s.navbar)
                  .map(([name, social]) => (
                    <MagneticWrapper key={name}>
                      <Link
                        href={social.url}
                        className="flex items-center justify-center size-9 rounded-xl border border-zinc-200/50 dark:border-zinc-800/40 bg-white dark:bg-zinc-900 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all shadow-sm"
                        title={name}
                        target="_blank"
                      >
                        <social.icon className="size-4" />
                      </Link>
                    </MagneticWrapper>
                  ))}
              </div>
              
              {/* Desktop Nav List */}
              <nav className="hidden lg:flex flex-col gap-2 pt-6">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2 block">
                  Sections
                </span>
                {[
                  { label: "About", href: "#about" },
                  { label: "Work Experience", href: "#work" },
                  { label: "Skills & Stack", href: "#skills" },
                  { label: "Selected Projects", href: "#projects" },
                  { label: "Get in Touch", href: "#contact" }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between text-xs font-mono text-muted-foreground hover:text-primary py-1.5 transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="h-[1px] w-0 bg-primary group-hover:w-8 transition-all duration-300"></span>
                  </Link>
                ))}
              </nav>

            </div>
          </BlurFade>
        </aside>

        {/* Right Column: Detailed Scroll Content */}
        <div className="space-y-16 lg:space-y-24 pb-20">
          
          {/* About Section */}
          <section id="about" className="scroll-mt-24">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-xs font-mono text-primary uppercase tracking-widest">01 / About</h2>
                  <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800/60"></div>
                </div>
                <Markdown className="prose dark:prose-invert max-w-none text-pretty font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
                  {DATA.summary}
                </Markdown>
              </div>
            </BlurFade>
          </section>

          {/* Experience Section */}
          <section id="work" className="scroll-mt-24">
            <div className="space-y-8">
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex items-center gap-3">
                  <h2 className="text-xs font-mono text-primary uppercase tracking-widest">02 / Experience</h2>
                  <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800/60"></div>
                </div>
              </BlurFade>

              <div className="relative pl-6 md:pl-8 border-l border-zinc-200 dark:border-zinc-800/60 space-y-8 ml-3">
                {DATA.work.map((work, id) => (
                  <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
                    <div className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] md:-left-[39px] top-4 flex h-3 w-3 items-center justify-center rounded-full bg-white dark:bg-zinc-950 border-2 border-primary"></span>
                      
                      <ResumeCard
                        logoUrl={work.logoUrl}
                        altText={work.company}
                        title={work.company}
                        subtitle={work.title}
                        href={work.href}
                        badges={work.badges}
                        period={`${work.start} - ${work.end ?? "Present"}`}
                        description={work.description}
                      />
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-24">
            <div className="space-y-8">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="flex items-center gap-3">
                  <h2 className="text-xs font-mono text-primary uppercase tracking-widest">03 / Education</h2>
                  <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800/60"></div>
                </div>
              </BlurFade>

              <div className="relative pl-6 md:pl-8 border-l border-zinc-200 dark:border-zinc-800/60 space-y-8 ml-3">
                {DATA.education.map((education, id) => (
                  <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                    <div className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[31px] md:-left-[39px] top-4 flex h-3 w-3 items-center justify-center rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-300 dark:border-zinc-700"></span>
                      
                      <ResumeCard
                        href={education.href}
                        logoUrl={education.logoUrl}
                        altText={education.school}
                        title={education.school}
                        subtitle={education.degree}
                        period={`${education.start} - ${education.end}`}
                      />
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-24">
            <div className="space-y-6">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <div className="flex items-center gap-3">
                  <h2 className="text-xs font-mono text-primary uppercase tracking-widest">04 / Skills</h2>
                  <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800/60"></div>
                </div>
              </BlurFade>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILL_CATEGORIES.map((category, catIdx) => (
                  <BlurFade key={category.name} delay={BLUR_FADE_DELAY * 8 + catIdx * 0.05}>
                    <div className="p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40 bg-zinc-500/5 dark:bg-zinc-400/5 space-y-3 h-full">
                      <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="px-2 py-0.5 text-xs font-mono bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/30 text-zinc-700 dark:text-zinc-300 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all rounded-md"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <div className="space-y-8">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <div className="flex items-center gap-3">
                  <h2 className="text-xs font-mono text-primary uppercase tracking-widest">05 / Projects</h2>
                  <div className="h-[1px] flex-1 bg-zinc-200 dark:bg-zinc-800/60"></div>
                </div>
              </BlurFade>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DATA.projects.map((project, id) => {
                  // Asymmetric Bento layout rule: item 1, 4, 7, 10 span 2 columns on medium+ screens
                  const isFeatured = id === 0 || id === 3 || id === 6 || id === 9;
                  return (
                    <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 10 + id * 0.05} className={cn(isFeatured ? "md:col-span-2" : "md:col-span-1")}>
                      <ProjectCard
                        href={project.href}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                      />
                    </BlurFade>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-24">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="rounded-2xl liquid-glass p-8 text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 size-24 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 size-24 bg-primary/10 rounded-full blur-2xl"></div>
                
                <div className="space-y-2 relative z-10">
                  <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
                    Let&apos;s Connect
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
                    Get in Touch
                  </h2>
                  <p className="mx-auto max-w-[450px] text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Have a project in mind or want to chat? Reach out on LinkedIn. I am always open to discussing new opportunities or collaborating.
                  </p>
                </div>

                <div className="flex justify-center relative z-10">
                  <MagneticWrapper>
                    <Link
                      href={DATA.contact.social.LinkedIn.url}
                      target="_blank"
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono font-medium tracking-tight rounded-xl bg-primary text-primary-foreground hover:bg-primary/95 transition-all shadow-md active:scale-95 duration-100"
                    >
                      Connect on LinkedIn ↗
                    </Link>
                  </MagneticWrapper>
                </div>
              </div>
            </BlurFade>
          </section>

        </div>

      </div>
    </main>
  );
}
