import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

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
      {/* Full contact form + details aa rahe hain Phase 5 mein (Resend + Server Actions) */}
    </Container>
  );
}
