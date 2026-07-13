import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container>
      <section className="grid min-h-[62vh] place-items-center py-20 text-center">
        <div className="max-w-[680px]">
          <p className="font-mono text-[14px] font-black uppercase tracking-[0.08em] text-brand">
            404
          </p>

          <h1 className="mt-4 text-[clamp(34px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
            This page could not be found.
          </h1>

          <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-[1.75] text-muted">
            The page may have moved, the URL may be incorrect, or the content may
            no longer be available.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-[13px]">
            <Button href="/">Go home</Button>
            <Button href="/blog" variant="secondary">
              Read the blog
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}