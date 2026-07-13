import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles by Umair Haider Hashmi covering modern web development, full-stack engineering, software architecture, web performance, and related technologies.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Umair Haider Hashmi",
    description:
      "Technical articles on modern web development, full-stack engineering, software architecture, web performance, and related technologies.",
    url: "/blog",
    siteName: "Umair",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <Container>
      <PageHero
        kicker="Writing"
        title={
          <>
            Notes on <em>modern web development and engineering</em>.
          </>
        }
        copy="Articles about React, Next.js, full-stack development, performance, cloud technologies, and lessons from building real-world projects."
      />

      <section className="grid gap-[18px] pb-20 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-lg border border-line bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] p-[22px] shadow-[0_18px_60px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-[3px] hover:border-[color-mix(in_srgb,var(--color-brand)_42%,var(--color-line))] hover:shadow-soft"
          >
            <p className="font-mono text-[12px] font-black uppercase tracking-[0.08em] text-brand">
              {post.metadata.category}
            </p>
            <h3 className="mt-4 text-[22px] font-semibold leading-[1.28] tracking-[-0.012em]">
              {post.metadata.title}
            </h3>
            <p className="mt-3 text-muted">{post.metadata.excerpt}</p>
            <div className="mt-7">
              <Button href={`/blog/${post.slug}`} variant="secondary">
                Read post
              </Button>
            </div>
          </article>
        ))}
      </section>
    </Container>
  );
}
