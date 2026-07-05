const stackNodes = [
  {
    label: "React",
    detail: "UI",
    className: "left-[32px] top-[88px]",
  },
  {
    label: "Next.js",
    detail: "App",
    className: "right-[34px] top-[92px]",
  },
  {
    label: "Node.js",
    detail: "Server",
    className: "right-[30px] top-[228px]",
  },
  {
    label: "Database",
    detail: "SQL/NoSQL",
    className: "left-[34px] top-[232px]",
  },
];

const workflow = ["Code", "API", "Data", "Deploy"];

const codeLines = ["72%", "52%", "84%", "64%"]; 

export function VisualCard() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[480px] overflow-hidden rounded-xl border border-line-strong bg-[radial-gradient(circle_at_78%_18%,color-mix(in_srgb,var(--color-brand-2)_36%,transparent),transparent_11rem),linear-gradient(145deg,var(--color-paper),var(--color-paper-2))] shadow-soft [animation:visual-float_7s_ease-in-out_infinite] [isolation:isolate]"
    >
      <span className="absolute left-6 top-[22px] z-[1] font-mono text-[11px] font-black tracking-[0.16em] text-[color-mix(in_srgb,var(--color-brand)_72%,transparent)]">
        FULL-STACK WORKFLOW
      </span>

      <div className="absolute inset-x-[54px] top-[76px] h-[242px] rounded-full border border-line-strong opacity-80 [animation:spin_34s_linear_infinite]" />
      <div className="absolute inset-x-[86px] top-[108px] h-[178px] rounded-full border border-line rotate-[28deg] opacity-70 [animation:spin_42s_linear_infinite_reverse]" />

      <div className="absolute left-1/2 top-[190px] z-[2] grid h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[34px] border border-line-strong bg-[linear-gradient(145deg,color-mix(in_srgb,var(--color-paper)_92%,transparent),var(--color-paper-2))] shadow-soft">
        <div className="text-center">
          <span className="block font-mono text-[11px] font-black uppercase tracking-[0.12em] text-brand">
            Stack
          </span>
          <strong className="mt-1 block text-[18px] leading-none tracking-[-0.03em] text-ink">
            Web App
          </strong>
          <span className="mt-2 block text-[11px] font-bold text-soft">
            UI + Server + Data
          </span>
        </div>
      </div>

      {stackNodes.map((node, i) => (
        <div
          key={node.label}
          className={`absolute z-[3] min-w-[92px] rounded-[18px] border border-line-strong bg-[color-mix(in_srgb,var(--color-paper)_88%,transparent)] px-3 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.05)] ${node.className} [animation:visual-float_7s_ease-in-out_infinite]`}
          style={{ animationDelay: `${i * -1.2}s` }}
        >
          <strong className="block text-[13px] leading-none text-ink">
            {node.label}
          </strong>
          <span className="mt-1 block font-mono text-[10px] font-black uppercase tracking-[0.1em] text-brand">
            {node.detail}
          </span>
        </div>
      ))}

      <div className="absolute left-7 top-[330px] z-[3] max-w-[200px] rounded-[18px] border border-line-strong bg-paper p-[14px] shadow-soft">
        <strong className="block text-[13px]">Frontend to Backend</strong>
        <span className="mt-1 block text-[12px] text-soft">
          React UI connected to server-side actions, APIs, and data.
        </span>
      </div>
      <div className="absolute right-[26px] top-[322px] z-[3] max-w-[192px] rounded-[18px] border border-line-strong bg-paper p-[14px] shadow-soft">
        <strong className="block text-[13px]">Ship and Improve</strong>
        <span className="mt-1 block text-[12px] text-soft">
          Deploy, monitor, refine, and keep applications maintainable.
        </span>
      </div>

      <div className="absolute bottom-[30px] left-[30px] right-[30px] z-[2] overflow-hidden rounded-[22px] border border-line-strong bg-[color-mix(in_srgb,var(--color-paper)_92%,transparent)] shadow-soft">
        <div className="flex items-center gap-[7px] border-b border-line px-[15px] py-[13px]">
          <span className="h-[10px] w-[10px] rounded-full bg-brand" />
          <span className="h-[10px] w-[10px] rounded-full bg-brand-3" />
          <span className="h-[10px] w-[10px] rounded-full bg-brand-2" />
        </div>
        <div className="grid gap-4 p-[18px]">
          <div className="grid grid-cols-4 gap-2">
            {workflow.map((step) => (
              <span
                key={step}
                className="rounded-full border border-line bg-paper-2 px-2 py-1 text-center font-mono text-[10px] font-black uppercase tracking-[0.08em] text-muted"
              >
                {step}
              </span>
            ))}
          </div>
          <div className="grid gap-[9px]">
            {codeLines.map((w, i) => (
              <span
                key={i}
                className="block h-[9px] rounded-full bg-[color-mix(in_srgb,var(--color-brand)_32%,transparent)]"
                style={{ width: w }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
