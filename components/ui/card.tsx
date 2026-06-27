type CardProps = {
  number?: string;
  title: string;
  children: React.ReactNode;
};

export function Card({ number, title, children }: CardProps) {
  return (
    <article className="rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] p-[22px] shadow-[0_18px_60px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-[3px] hover:border-[color-mix(in_srgb,var(--color-brand)_42%,var(--color-line))] hover:shadow-soft">
      {number && (
        <span className="font-mono text-[12px] font-black text-brand">
          {number}
        </span>
      )}
      <h3 className="mt-4 text-[22px] font-semibold leading-[1.28] tracking-[-0.012em]">
        {title}
      </h3>
      <div className="mt-3 text-muted">{children}</div>
    </article>
  );
}
