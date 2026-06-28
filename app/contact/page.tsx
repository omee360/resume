import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <Container>
      <PageHero
        kicker="Contact"
        title={
          <>
            Let’s discuss a <em>website, role, or project</em>.
          </>
        }
        copy="Use this page for project inquiries, frontend/WordPress opportunities, collaborations, or direct hiring conversations."
      />

      <section className="grid gap-5 pb-20 md:grid-cols-[0.86fr_1.14fr]">
        <div className="grid gap-[18px]">
          <Card number="Email" title="add-your-email@example.com">
            Best for project briefs, opportunities, and longer conversations.
          </Card>
          <Card number="Social" title="LinkedIn / GitHub">
            Add profile links here once the final URLs are ready.
          </Card>
          <Card number="Resume" title="Need a quick document?">
            Download the simple resume text file for quick screening.
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
