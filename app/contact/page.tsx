import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Umair Haider Hashmi for WordPress development, frontend implementation, website improvements, and professional web development opportunities.",
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

      <section className="grid gap-5 pb-20 md:grid-cols-[0.86fr_1.14fr]">
        <div className="grid gap-[18px]">
          <Card number="Email" title="umair@umairdev.com">
            Best for project briefs, website improvement requests, role
            opportunities, and longer technical conversations.
            <div className="mt-[34px] flex flex-wrap gap-[13px]">
              <Button href="mailto:umair@umairdev.com" variant="secondary">
                Send email
              </Button>
            </div>
          </Card>
          <Card number="Social" title="LinkedIn / GitHub">
            Connect professionally on LinkedIn or review public code and learning
            work on GitHub.
            <div className="mt-[34px] flex flex-wrap gap-[13px]">
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
          </Card>
          <Card number="WhatsApp" title="+92 334 9816823">
            Useful for quick coordination after the first project or opportunity
            context is clear.
            <div className="mt-[34px] flex flex-wrap gap-[13px]">
              <Button href="https://wa.me/923349816823" variant="secondary">
                Message on WhatsApp
              </Button>
            </div>
          </Card>
          <Card number="Resume" title="Need a quick document?">
            Download a short text resume with focus areas, skills, contact
            details, and certification links.
            <div className="mt-[34px] flex flex-wrap gap-[13px]">
              <Button href="/umair-resume.txt" variant="secondary" download>
                Download resume
              </Button>
            </div>
          </Card>
        </div>

        <ContactForm />
      </section>
    </Container>
  );
}
