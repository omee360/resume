import { Kicker } from "@/components/ui/kicker";

type PageHeroProps = {
  kicker: string;
  title: React.ReactNode;
  copy: string;
};

export function PageHero({ kicker, title, copy }: PageHeroProps) {
  return (
    <section className="pb-[50px] pt-[82px]">
      <Kicker>{kicker}</Kicker>
      <h1 className="mt-[18px] max-w-[880px] text-[clamp(32px,4.1vw,54px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
        {title}
      </h1>
      <p className="mt-6 max-w-[720px] text-[17px] leading-[1.75] text-muted">
        {copy}
      </p>
    </section>
  );
}
