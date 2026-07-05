import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { default: Post } = await post.loadPost();
  const { metadata } = post;

  return (
    <Container>
      <section className="pb-[50px] pt-[82px]">
        <p className="font-mono text-[12px] font-black uppercase tracking-[0.08em] text-brand">
          {metadata.category}
        </p>
        <h1 className="mt-[18px] max-w-[880px] text-[clamp(32px,4.1vw,54px)] font-extrabold leading-[1.08] tracking-[-0.03em]">
          {metadata.title}
        </h1>
        <p className="mt-6 max-w-[720px] text-[17px] leading-[1.75] text-muted">
          {metadata.excerpt}
        </p>
      </section>

      <section className="grid gap-7 pb-20 lg:grid-cols-[1fr_280px]">
        <article className="rounded-xl border border-line bg-[color-mix(in_srgb,var(--color-paper)_82%,transparent)] p-[24px] text-muted shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
          <Post />
        </article>

        <aside className="h-fit rounded-lg border border-line bg-paper p-[22px] text-[14px] text-muted shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
          <p className="font-mono text-[12px] font-black uppercase tracking-[0.08em] text-brand">
            Post details
          </p>
          <p className="mt-4">Category: {metadata.category}</p>
          <p className="mt-2">Published: {formatPostDate(metadata.date)}</p>
          <div className="mt-6">
            <Button href="/blog" variant="secondary">
              Back to blog
            </Button>
          </div>
        </aside>
      </section>
    </Container>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
