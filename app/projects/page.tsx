import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";

const projects = [
  {
    meta: "Portfolio / Next.js",
    title: "umairdev.com portfolio system",
    description:
      "A modern personal website with strong typography, project showcase, technical blog, contact flow, dark mode, and a clean component system.",
    image: null,
    tags: ["Next.js", "TypeScript", "Tailwind"],
    primary: { label: "Live preview", href: "/" },
    secondary: { label: "Discuss similar work", href: "/contact" },
  },
  {
    meta: "WordPress / Business site",
    title: "Custom service website",
    description:
      "A business website structure with reusable content sections, responsive layouts, clean visual hierarchy, and client-friendly editing patterns.",
    image: null,
    tags: ["WordPress", "Custom theme", "Responsive CSS"],
    primary: { label: "Request link", href: "/contact" },
    secondary: { label: "Details", href: "/contact" },
  },
  {
    meta: "Frontend / UI build",
    title: "Landing page component set",
    description:
      "A set of reusable sections for marketing pages: hero blocks, service cards, CTA panels, forms, and responsive navigation patterns.",
    image: null,
    tags: ["HTML", "CSS", "JavaScript"],
    primary: { label: "View demo", href: "/" },
    secondary: { label: "Source on request", href: "/contact" },
  },
];

export default function ProjectsPage() {
  return (
    <Container>
      <PageHero
        kicker="Selected work"
        title={
          <>
            Projects that show <em>taste, structure, and implementation</em>.
          </>
        }
        copy="This page can stay flexible: live websites, GitHub repositories, internal experiments, WordPress builds, or selected frontend work. Each card focuses on what was built, the stack, and where to view it."
      />
      <section className="grid gap-[18px] pb-20">
        {projects.map((project) => (
          <article
            key={project.title}
            className="grid items-center gap-7 overflow-hidden rounded-xl border border-line bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] p-[18px] shadow-[0_18px_60px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-[3px] hover:border-[color-mix(in_srgb,var(--color-brand)_42%,var(--color-line))] hover:shadow-soft lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="relative min-h-[300px] overflow-hidden rounded-[24px] border border-line-strong bg-paper-2 bg-[radial-gradient(circle_at_25%_20%,color-mix(in_srgb,var(--color-brand)_65%,transparent),transparent_60%),radial-gradient(circle_at_80%_78%,color-mix(in_srgb,var(--color-brand-2)_60%,transparent),transparent_60%)]">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              )}
            </div>
            <div>
              <p className="font-mono text-[12px] font-black uppercase tracking-[0.08em] text-brand">
                {project.meta}
              </p>
              <h3 className="mt-3 text-[clamp(27px,3vw,38px)] font-extrabold leading-[1.16] tracking-[-0.025em]">
                {project.title}
              </h3>
              <p className="mt-3 text-muted">{project.description}</p>
              <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line bg-paper-2 px-[10px] py-[6px] text-[12px] font-extrabold text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-[34px] flex flex-wrap gap-[13px]">
                <Button href={project.primary.href}>
                  {project.primary.label}
                </Button>
                <Button href={project.secondary.href} variant="secondary">
                  {project.secondary.label}
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
}
