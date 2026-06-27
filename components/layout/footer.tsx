import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-line py-[30px] text-soft">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Umair Haider Hashmi. Built with clarity
            and care.
          </p>
          <p>Available for selected projects and frontend roles.</p>
        </div>
      </Container>
    </footer>
  );
}
