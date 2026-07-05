const orbits = [
  "inset-[42px] [animation:spin_24s_linear_infinite]",
  "inset-[86px_36px] rotate-[44deg] [animation:spin_32s_linear_infinite]",
  "inset-[122px_58px] rotate-[-28deg] [animation:spin_28s_linear_infinite]",
];

const codeLines = ["72%", "48%", "88%", "60%", "76%"];

export function VisualCard() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[480px] overflow-hidden rounded-xl border border-line-strong bg-[radial-gradient(circle_at_78%_18%,color-mix(in_srgb,var(--color-brand-2)_36%,transparent),transparent_11rem),linear-gradient(145deg,var(--color-paper),var(--color-paper-2))] shadow-soft [animation:visual-float_7s_ease-in-out_infinite] [isolation:isolate]"
    >
      <span className="absolute left-6 top-[22px] z-[1] font-mono text-[11px] font-black tracking-[0.16em] text-[color-mix(in_srgb,var(--color-brand)_72%,transparent)]">
        BUILD / SHIP / IMPROVE
      </span>

      {orbits.map((cls, i) => (
        <div
          key={i}
          className={`absolute rounded-full border border-line-strong ${cls}`}
        >
          <span className="absolute -top-[6px] left-1/2 h-3 w-3 rounded-full bg-brand shadow-[0_0_0_8px_color-mix(in_srgb,var(--color-brand)_14%,transparent)]" />
        </div>
      ))}
      <div className="absolute left-7 top-[34px] z-[3] max-w-[205px] rounded-[18px] border border-line-strong bg-paper p-[14px] shadow-soft">
        <strong className="block text-[13px]">Component Systems</strong>
        <span className="mt-1 block text-[12px] text-soft">
          Reusable components, clean structure, consistent application patterns.
        </span>
      </div>
      <div className="absolute right-[26px] top-[42%] z-[3] max-w-[205px] rounded-[18px] border border-line-strong bg-paper p-[14px] shadow-soft">
        <strong className="block text-[13px]">Production Mindset</strong>
        <span className="mt-1 block text-[12px] text-soft">
          Maintainable code, performance-focused builds, and scalable solutions.
        </span>
      </div>

      <div className="absolute bottom-[30px] left-[30px] right-[30px] z-[2] overflow-hidden rounded-[22px] border border-line-strong bg-[color-mix(in_srgb,var(--color-paper)_92%,transparent)] shadow-soft">
        <div className="flex items-center gap-[7px] border-b border-line px-[15px] py-[13px]">
          <span className="h-[10px] w-[10px] rounded-full bg-brand" />
          <span className="h-[10px] w-[10px] rounded-full bg-brand-3" />
          <span className="h-[10px] w-[10px] rounded-full bg-brand-2" />
        </div>
        <div className="grid gap-[10px] p-[18px]">
          {codeLines.map((w, i) => (
            <span
              key={i}
              className="block h-[10px] rounded-full bg-[color-mix(in_srgb,var(--color-brand)_32%,transparent)]"
              style={{ width: w }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
