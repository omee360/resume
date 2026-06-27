import { Kicker } from "@/components/ui/kicker";

type SectionProps = {
  kicker: string;
  title: React.ReactNode;
  copy: string;
  children: React.ReactNode;
};

export function Section({ kicker, title, copy, children }: SectionProps) {
  return (
    <section className="py-[62px]">
      <div className="mb-7 grid gap-9 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <Kicker>{kicker}</Kicker>
          <h2 className="mt-3 max-w-[900px] text-[clamp(32px,4.1vw,54px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
            {title}
          </h2>
        </div>

        <p className="self-end text-[17px] leading-[1.75] text-muted">{copy}</p>
      </div>
      {children}
    </section>
  );
}
