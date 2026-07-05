import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Umair Haider Hashmi, Full-Stack Developer specializing in React, Next.js, Node.js, and modern web application development.",
};

export default function ContactPage() {
  return (
    <Container>
      <PageHero
        kicker="Contact"
        title={
          <>
            Let&apos;s discuss a <em>website, role, or project</em>.
          </>
        }
        copy="Use this page for WordPress work, frontend implementation, website cleanup, collaboration, or direct hiring conversations. I respond best to clear project goals, existing website links, and practical next steps."
      />

      <section className="grid gap-[18px] pb-20">
        <div className="grid gap-[18px] md:grid-cols-3">
          <article className="rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] p-[22px] shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
            <p className="font-mono text-[12px] font-black uppercase tracking-[0.08em] text-brand">
              Email
            </p>
            <h2 className="mt-3 text-[22px] font-semibold leading-[1.28] tracking-[-0.012em]">
              umair@umairdev.com
            </h2>
            <p className="mt-3 text-muted">
              Best for project briefs, role opportunities, and longer technical
              conversations.
            </p>
            <div className="mt-5">
              <Button href="mailto:umair@umairdev.com" variant="secondary">
                Send email
              </Button>
            </div>
          </article>

          <article className="rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] p-[22px] shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
            <p className="font-mono text-[12px] font-black uppercase tracking-[0.08em] text-brand">
              Social
            </p>
            <h2 className="mt-3 text-[22px] font-semibold leading-[1.28] tracking-[-0.012em]">
              LinkedIn / GitHub
            </h2>
            <p className="mt-3 text-muted">
              Connect professionally or review public code and learning work.
            </p>
            <div className="mt-5 flex flex-wrap gap-[13px]">
              <Button
                href="https://www.linkedin.com/in/umair-haider-hashmi/"
                variant="secondary"
              >
                LinkedIn
              </Button>
              <Button href="https://github.com/omee360" variant="ghost">
                GitHub
              </Button>
            </div>
          </article>

          <article className="rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] p-[22px] shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
            <p className="font-mono text-[12px] font-black uppercase tracking-[0.08em] text-brand">
              WhatsApp
            </p>
            <h2 className="mt-3 text-[22px] font-semibold leading-[1.28] tracking-[-0.012em]">
              +92 334 9816823
            </h2>
            <p className="mt-3 text-muted">
              Useful for quick coordination after the main context is clear.
            </p>
            <div className="mt-5">
              <Button href="https://wa.me/923349816823" variant="secondary">
                WhatsApp
              </Button>
            </div>
          </article>
        </div>

        <div className="grid gap-[18px] lg:grid-cols-[1fr_360px]">
          <ContactForm />

          <div className="grid gap-[18px]">
          <Card number="Resume" title="Need a quick document?">
            Download a short text resume with focus areas, skills, contact
            details, and certification links.
            <div className="mt-5 flex flex-wrap gap-[13px]">
              <Button href="/umair-resume.txt" variant="secondary" download>
                Download resume
              </Button>
            </div>
          </Card>
          </div>
        </div>
      </section>
    </Container>
  );
}
