import Image from "next/image";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-ink first:mt-0">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-[16px] leading-[1.85] text-muted">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">{children}</ul>
  ),
  li: ({ children }) => <li className="leading-[1.8]">{children}</li>,
  a: ({ children, href }) => (
    <a
      href={href}
      className="font-bold text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand"
    >
      {children}
    </a>
  ),
  PostImage: ({ src, alt, width, height }) => (
    <figure className="my-8 overflow-hidden rounded-lg border border-line bg-paper shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 720px"
        className="h-auto w-full"
      />
    </figure>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
