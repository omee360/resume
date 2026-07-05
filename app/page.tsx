import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Typewriter } from "@/components/ui/typewriter";
import { VisualCard } from "@/components/sections/visual-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Web Developer",
  description:
    "Umair Haider Hashmi is a full-stack web developer building professional websites and web applications with JavaScript, React, Next.js, TypeScript, WordPress, and modern backend fundamentals.",
};

const signals = [
  {
    title: "9+ years web experience",
    text: "Building and delivering production websites and applications across modern web technologies.",
  },
  {
    title: "Frontend + backend thinking",
    text: "Responsive UI, data flow, forms, validation, server actions, APIs, and practical architecture.",
  },
  {
    title: "Modern JavaScript ecosystem",
    text: "React, Next.js, TypeScript, Node.js, APIs, databases, and modern deployment workflows.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Full-stack web development",
    text: "Professional websites and web applications with frontend UI, backend logic, form handling, validation, routing, content structure, and deployment-ready thinking.",
  },
  {
    number: "02",
    title: "Frontend implementation",
    text: "Clean HTML, CSS, JavaScript, React, Next.js, and Tailwind work with strong spacing, clear hierarchy, accessible interactions, and mobile-first polish.",
  },
  {
    number: "03",
    title: "WordPress and existing sites",
    text: "Custom WordPress work, theme/template improvements, website cleanup, content-section polish, and modernization for sites that need stronger structure.",
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
    text: "A developer who understands real support, communication, deadlines, and practical website work beyond just writing code.",
  },
];

const credentials = [
  {
    title: "IBM JavaScript Full Stack Developer",
    href: "https://coursera.org/share/3127d7c68066f59c955692a18818bf35",
  },
  {
    title: "Coursera web development certificate",
    href: "https://coursera.org/share/22c7bc46b95a84a50c19f6773fe91fee",
  },
  {
    title: "Coursera JavaScript certificate",
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
                  "Full-stack developer.",
                  "Next.js developer.",
                  "JavaScript developer.",
                  "WordPress developer.",
                ]}
              />
            </h1>

            <p className="mt-[14px] font-mono text-[13px] font-extrabold uppercase tracking-[0.08em] text-brand">
              Umair Haider Hashmi
            </p>

            <div className="mt-[22px] inline-flex items-center gap-[9px] rounded-full border border-line bg-[color-mix(in_srgb,var(--color-paper)_84%,transparent)] px-3 py-2 text-[13px] font-extrabold text-muted">
              <span className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_0_6px_rgba(34,197,94,0.14)]" />
              Available for full-stack, frontend, WordPress, and website work
            </div>

            <p className="mt-[18px] max-w-[720px] text-[clamp(24px,3vw,38px)] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              I build professional websites and web applications with clean UI,
              practical backend logic, and maintainable full-stack structure.
            </p>

            <p className="mt-4 max-w-[620px] text-[clamp(16px,1.35vw,18px)] leading-[1.75] text-muted">
              I’m a Full-Stack Developer with 9+ years of web development
              experience, building modern applications with React, Next.js,
              Node.js, and cloud technologies. I focus on creating fast,
              scalable, and maintainable digital products.
            </p>

            <div className="mt-[34px] flex flex-wrap gap-[13px]">
              <Button href="/contact">Start a conversation</Button>
              <Button href="/umair-resume.txt" variant="ghost" download>
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
            Full-stack website work built for <em>real use</em>, not just
            screenshots.
          </>
        }
        copy="The goal is simple: a website or web app should look professional, load well, handle real user actions, explain the business clearly, work on mobile, and stay manageable after launch."
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
        copy="I can help with full-stack website builds, React/Next.js interfaces, forms and server-side flows, WordPress implementation, content-section cleanup, and modernizing older websites without overcomplicating the system."
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
            Full-stack learning that supports hands-on experience.
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
              Need a reliable website developer?
            </h3>
            <p className="mt-3 text-muted">
              Send a message for full-stack web development, React/Next.js
              frontend work, WordPress implementation, website cleanup, or a
              developer role where practical website experience matters.
            </p>
          </div>
          <div className="flex flex-wrap gap-[13px]">
            <Button href="/umair-resume.txt" download>
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
