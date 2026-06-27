const items = [
  { label: "Next.js", x: "8%", y: "18%", d: "0s" },
  { label: "TypeScript", x: "78%", y: "16%", d: "1.5s" },
  { label: "React", x: "6%", y: "72%", d: "2.8s" },
  { label: "Tailwind", x: "82%", y: "70%", d: "4s" },
  { label: "WordPress", x: "18%", y: "46%", d: "2s" },
  { label: "SEO", x: "68%", y: "44%", d: "3.2s" },
];

export function AmbientCode() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {items.map((item) => (
        <span
          key={item.label}
          className="absolute font-mono text-[clamp(14px,1.55vw,22px)] font-extrabold opacity-30 text-[color-mix(in_srgb,var(--color-brand)_30%,transparent)]"
          style={{
            left: item.x,
            top: item.y,
            animation: "float-code 8s ease-in-out infinite",
            animationDelay: item.d,
          }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}
