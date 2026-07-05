import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogPage() {
  return (
    <Container>
      <PageHero
        kicker="Writing"
        title={
          <>
            Notes on building better <em>websites</em>.
          </>
        }
        copy="Blog posts can strengthen the profile by showing communication and technical thinking. The content should stay practical: WordPress fixes, frontend lessons, Next.js notes, and website improvement guides."
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