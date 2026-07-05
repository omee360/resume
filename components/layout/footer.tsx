import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-line py-[30px] text-soft">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Umair Haider Hashmi. Full-stack web
            developer.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:umair@umairdev.com" className="hover:text-ink">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/umair-haider-hashmi/"
              className="hover:text-ink"
            >
              LinkedIn
            </a>
            <a href="https://github.com/omee360" className="hover:text-ink">
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
