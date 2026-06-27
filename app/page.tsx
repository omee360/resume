import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Typewriter } from "@/components/ui/typewriter";
import { VisualCard } from "@/components/sections/visual-card";

const signals = [
  {
    title: "Custom websites",
    text: "Built around real content, layout needs, and client goals.",
  },
  {
    title: "Frontend polish",
    text: "Responsive UI, careful spacing, clear hierarchy, and maintainable CSS.",
  },
  {
    title: "Practical delivery",
    text: "Focused on websites that are usable, editable, fast, and professional.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Custom WordPress websites",
    text: "Theme structure, page templates, flexible sections, and careful styling for business websites that need practical content control.",
  },
  {
    number: "02",
    title: "Frontend implementation",
    text: "Responsive pages, reusable components, strong typography, and modern UI details using HTML, CSS, JavaScript, React, and Next.js.",
  },
  {
    number: "03",
    title: "Website improvement",
    text: "Cleanup, redesign support, landing pages, performance-minded frontend changes, and polish for sites that need a stronger feel.",
  },
];

const services = [
  {
    title: "Build a new website",
    text: "Turn a design, brief, or content plan into a polished responsive site.",
  },
  {
    title: "Improve an existing site",
    text: "Fix weak layouts, inconsistent spacing, messy sections, and poor mobile UI.",
  },
  {
    title: "Join a team",
    text: "Contribute reliable frontend and WordPress implementation with clean handoff.",
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
                  "a web developer.",
                  "a WordPress developer.",
                  "a frontend developer.",
                ]}
              />
            </h1>

            <p className="mt-[14px] font-mono text-[13px] font-extrabold uppercase tracking-[0.08em] text-brand">
              Umair Haider Hashmi
            </p>

            <div className="mt-[22px] inline-flex items-center gap-[9px] rounded-full border border-line bg-[color-mix(in_srgb,var(--color-paper)_84%,transparent)] px-3 py-2 text-[13px] font-extrabold text-muted">
              <span className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_0_6px_rgba(34,197,94,0.14)]" />
              Available for selected website projects
            </div>

            <p className="mt-[18px] max-w-[720px] text-[clamp(24px,3vw,38px)] font-semibold leading-[1.18] tracking-[-0.02em] text-ink">
              I build clean, responsive websites for businesses, agencies, and
              teams.
            </p>

            <p className="mt-4 max-w-[620px] text-[clamp(16px,1.35vw,18px)] leading-[1.75] text-muted">
              I am a web developer experienced in custom WordPress builds,
              responsive frontend work, and practical website systems for
              clients, teams, and growing businesses.
            </p>

            <div className="mt-[34px] flex flex-wrap gap-[13px]">
              <Button href="/contact">Hire me for a project</Button>
              <Button href="/projects" variant="secondary">
                View work
              </Button>
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
            Website work that looks good and stays <em>manageable</em>.
          </>
        }
        copy="The homepage should be strong enough to represent me even when the Projects page is hidden. It should communicate what I do, how I think, and why someone can trust me with a website."
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
        kicker="How I can help"
        title="For employers, agencies, and clients."
        copy="The positioning should work for job opportunities and freelance work without sounding like a generic agency homepage."
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

        <div className="mt-[30px] grid items-center gap-5 rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] p-[22px] shadow-[0_18px_60px_rgba(0,0,0,0.04)] md:grid-cols-[1fr_auto]">
          <div>
            <Kicker>Ready to talk</Kicker>
            <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.012em]">
              Need the short version?
            </h3>
            <p className="mt-3 text-muted">
              Download a simple resume document for quick review, or contact me
              directly.
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
