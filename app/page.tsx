import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Typewriter } from "@/components/ui/typewriter";
import { VisualCard } from "@/components/sections/visual-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Umair Haider Hashmi is a Full-Stack Developer with 9+ years of experience building web applications, custom WordPress solutions, and scalable digital products using React, Next.js, TypeScript, Node.js, and cloud technologies.",
};

const signals = [
  {
    title: "9+ years web experience",
    text: "Building and delivering production websites and applications across modern web technologies.",
  },
  {
    title: "Frontend + Backend Development",
    text: "Building user interfaces, APIs, authentication flows, server logic, and complete application features.",
  },
  {
    title: "Modern JavaScript ecosystem",
    text: "React, Next.js, TypeScript, Node.js, Express, APIs, databases, and modern deployment workflows.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    text: "Modern websites and applications with frontend interfaces, backend functionality, APIs, databases, authentication, and deployment-ready architecture.",
  },
  {
    number: "02",
    title: "Frontend Engineering",
    text: "Building responsive, accessible, and high-performance interfaces with React, Next.js, TypeScript, Tailwind CSS, reusable components, and modern frontend practices.",
  },
  {
    number: "03",
    title: "CMS & WordPress Engineering",
    text: "Building custom WordPress solutions, improving existing websites, integrating modern workflows, and delivering maintainable client projects.",
  },
];

const services = [
  {
    title: "For businesses",
    text: "A professional website that explains services clearly, works on every screen, and is easy to maintain after launch.",
  },
  {
    title: "For agencies",
    text: "Reliable development support for modern websites, applications, frontend systems, and client solutions.",
  },
  {
    title: "For teams",
    text: "A developer who understands real support, communication, deadlines, and practical development work beyond just writing code.",
  },
];

const credentials = [
  {
    title: "IBM Fullstack JavaScript Developer",
    href: "https://coursera.org/share/3127d7c68066f59c955692a18818bf35",
  },
  {
    title: "Fullstack Development - Scrimba",
    href: "https://coursera.org/share/22c7bc46b95a84a50c19f6773fe91fee",
  },
  {
    title: "WordPress Development",
    href: "https://coursera.org/share/4689df8b844009270e95db3c46e9642f",
  },
];

export default function Home() {
  return (
    <Container>
      <section className="py-[52px] md:py-[78px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.74fr]">
          <div>
            <h1 className="grid max-w-[760px] gap-1.5 text-[clamp(28px,4.2vw,52px)] font-extrabold leading-[1.12] tracking-[-0.026em] text-ink">
              <span>Hello! I am</span>
              <Typewriter
                words={[
                  "Umair.",
                  "Full-Stack Developer.",
                  "Next.js Developer.",
                  "JavaScript Developer.",
                  "WordPress Developer.",
                ]}
              />
            </h1>

            <p className="mt-[14px] font-mono text-[13px] font-extrabold uppercase tracking-[0.08em] text-brand">
              Umair Haider Hashmi
            </p>

            <div className="mt-[22px] inline-flex max-w-full items-start gap-[10px] rounded-[18px] border border-line bg-[color-mix(in_srgb,var(--color-paper)_84%,transparent)] px-3 py-2 text-[13px] font-extrabold leading-[1.45] text-muted">
              <span className="mt-[0.42em] h-2 w-2 shrink-0 rounded-full bg-[#22c55e] shadow-[0_0_0_6px_rgba(34,197,94,0.14)]" />
              <span>
                Available for full-stack development, modern web apps, and
                custom WordPress projects
              </span>
            </div>

            <p className="mt-[18px] max-w-[720px] text-[clamp(24px,3vw,38px)] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              I build modern websites and applications with clean interfaces,
              scalable architecture, and reliable full-stack development
              practices.
            </p>

            <p className="mt-4 max-w-[620px] text-[clamp(16px,1.35vw,18px)] leading-[1.75] text-muted">
              I&apos;m a Full-Stack Developer with 9+ years of experience
              building modern web applications and custom WordPress solutions
              using React, Next.js, TypeScript, Node.js, and cloud-ready
              development practices.
            </p>

            <div className="mt-[34px] flex flex-wrap gap-[13px]">
              <Button href="/contact">Start a conversation</Button>
              <Button href="/Umair_Haider_Hashmi.pdf" variant="ghost" download>
                Download resume
              </Button>
            </div>

            <div className="mt-[34px] grid max-w-[720px] grid-cols-1 gap-3 sm:grid-cols-3">
              {signals.map((s) => (
                <div
                  key={s.title}
                  className="rounded-md border border-line bg-[color-mix(in_srgb,var(--color-paper)_76%,transparent)] p-4"
                >
                  <strong className="block text-[15px] tracking-[-0.03em]">
                    {s.title}
                  </strong>
                  <span className="mt-[5px] block text-[13px] text-soft">
                    {s.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <VisualCard />
          </div>
        </div>
      </section>
      <Section
        kicker="Capabilities"
        title={
          <>
            Full-stack development built for <em>real use</em>, not just
            screenshots.
          </>
        }
        copy="The goal is simple: a website or application should look professional, perform well, handle real user interactions, provide a smooth experience, work across devices, and stay maintainable after launch."
      >
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {capabilities.map((c) => (
            <Card key={c.number} number={c.number} title={c.title}>
              {c.text}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        kicker="Work style"
        title="For businesses, agencies, and teams."
        copy="I can help with full-stack website builds, React/Next.js interfaces, forms and server-side flows, custom WordPress development, performance improvements, and modernizing older websites without overcomplicating the system."
      >
        <div className="grid gap-px overflow-hidden rounded-xl bg-line md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[color-mix(in_srgb,var(--color-paper)_92%,transparent)] p-[26px]"
            >
              <span className="mb-[18px] block h-[3px] w-[34px] rounded-full bg-gradient-to-r from-brand to-brand-2" />
              <h3 className="text-[20px] font-semibold leading-[1.25] tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-[30px] rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] p-[22px] shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
          <Kicker>Credentials</Kicker>
          <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.012em]">
            Professional growth backed by hands-on development experience.
          </h3>
          <p className="mt-3 max-w-[760px] text-muted">
            Professional development through industry-focused programs covering
            full-stack JavaScript, cloud-native development, DevOps, and modern
            engineering practices.
          </p>
          <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
            {credentials.map((credential) => (
              <li key={credential.href}>
                <a
                  href={credential.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-line bg-paper-2 px-[10px] py-[6px] text-[12px] font-extrabold text-muted transition hover:border-brand hover:text-brand"
                >
                  {credential.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[30px] grid items-center gap-5 rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] p-[22px] shadow-[0_18px_60px_rgba(0,0,0,0.04)] md:grid-cols-[1fr_auto]">
          <div>
            <Kicker>Contact</Kicker>
            <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.012em]">
              Need a reliable full-stack developer?
            </h3>
            <p className="mt-3 text-muted">
              Send a message for full-stack development, React/Next.js
              applications, custom WordPress solutions, performance
              improvements, or modern web projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-[13px]">
            <Button href="/Umair_Haider_Hashmi.pdf" download>
              Download resume
            </Button>
            <Button href="/contact" variant="secondary">
              Contact me
            </Button>
          </div>
        </div>
      </Section>
    </Container>
  );
}
