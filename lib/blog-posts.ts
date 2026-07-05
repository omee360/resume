import { metadata as componentsPortfolio } from "@/content/blog/components-portfolio.mdx";
import { metadata as professionalUiDetails } from "@/content/blog/professional-ui-details.mdx";
import { metadata as wordpressMaintainable } from "@/content/blog/wordpress-maintainable.mdx";

export const blogPosts = [
  {
    slug: "wordpress-maintainable",
    metadata: wordpressMaintainable,
    loadPost: () => import("@/content/blog/wordpress-maintainable.mdx"),
  },
  {
    slug: "professional-ui-details",
    metadata: professionalUiDetails,
    loadPost: () => import("@/content/blog/professional-ui-details.mdx"),
  },
  {
    slug: "components-portfolio",
    metadata: componentsPortfolio,
    loadPost: () => import("@/content/blog/components-portfolio.mdx"),
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}