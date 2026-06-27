type KickerProps = {
  children: React.ReactNode;
};

export function Kicker({ children }: KickerProps) {
  return (
    <p className="inline-flex items-center gap-[10px] font-mono text-[12px] font-extrabold uppercase tracking-[0.08em] text-brand">
      <span className="h-px w-9 bg-current" />
      {children}
    </p>
  );
}
