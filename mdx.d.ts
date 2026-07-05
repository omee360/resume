declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const metadata: {
    title: string;
    category: string;
    excerpt: string;
    date: string;
  };

  const MDXContent: ComponentType;
  export default MDXContent;
}