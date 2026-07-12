import { metadata as buildingFastWebsites } from "@/content/blog/building-fast-maintainable-websites.mdx";
import { metadata as whyNextjsModernWebApplications } from "@/content/blog/why-nextjs-modern-web-applications.mdx";
import { metadata as frontendBackendDevelopment } from "@/content/blog/frontend-backend-fullstack-development.mdx";

export const blogPosts = [
  {
    slug: "building-fast-maintainable-websites",
    metadata: buildingFastWebsites,
    loadPost: () =>
      import("@/content/blog/building-fast-maintainable-websites.mdx"),
  },
  {
    slug: "why-nextjs-modern-web-applications",
    metadata: whyNextjsModernWebApplications,
    loadPost: () =>
      import("@/content/blog/why-nextjs-modern-web-applications.mdx"),
  },
  {
    slug: "frontend-backend-fullstack-development",
    metadata: frontendBackendDevelopment,
    loadPost: () =>
      import("@/content/blog/frontend-backend-fullstack-development.mdx"),
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
