import Link from "next/link";
import { Container } from "@/components/ui/container";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--color-bg)_86%,transparent)] backdrop-blur-lg">
      <Container>
        <nav
          className="flex min-h-[76px] items-center gap-[26px]"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="mr-auto inline-flex items-center gap-3 font-extrabold tracking-tight"
            aria-label="Umair - home"
          >
            <span className="grid h-[38px] w-[38px] place-items-center rounded-[14px] border border-line-strong bg-paper font-mono text-xs text-ink">
              U
            </span>
            <span>Umair</span>
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-line bg-[color-mix(in_srgb,var(--color-paper)_78%,transparent)] p-[5px]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-[13px] font-extrabold text-muted hover:bg-ink hover:text-bg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-[10px]">
            <button
              type="button"
              aria-label="Toggle theme"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper text-ink"
            >
              ◐
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
