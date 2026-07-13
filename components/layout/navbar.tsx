import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--color-bg)_86%,transparent)] backdrop-blur-lg">
      <Container>
        <nav
          className="flex min-h-[76px] flex-wrap items-center gap-3 py-3 sm:flex-nowrap sm:gap-[26px] sm:py-0"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="mr-auto inline-flex items-center gap-3 font-extrabold tracking-tight"
            aria-label="Umair - home"
          >
            <span className="grid h-[38px] w-[82px] place-items-center rounded-[14px] border border-line-strong bg-paper font-mono text-[11px] text-ink sm:w-[100px] sm:text-xs">
              {"<Umair />"}
            </span>
            {/* <span>Umair</span> */}
          </Link>

          <div className="order-3 flex w-full items-center justify-center gap-1 rounded-full border border-line bg-[color-mix(in_srgb,var(--color-paper)_78%,transparent)] p-[5px] sm:order-none sm:w-auto sm:gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-2.5 py-2 text-[12px] font-extrabold text-muted hover:bg-ink hover:text-bg sm:px-3 sm:text-[13px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-[10px]">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
