import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  type?: "button" | "submit";
  download?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-[10px] min-h-[46px] rounded-full border px-[18px] text-[14px] font-black tracking-[-0.02em] transition-all duration-200 ease-out hover:translate-y-0.5";

const variants = {
  primary: "border-transparent bg-ink text-bg",
  secondary:
    "border-line-strong bg-[color-mix(in_srgb,var(--color-paper)_88%,transparent)] text-ink",
  ghost: "border-line text-muted",
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  download,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={classes} download={download}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
