import type { ReactNode } from "react";

export const dynamicParams = false;

const BLOG_SLUGS = [
  "saas-ideas-2026",
  "how-ai-is-transforming-saas-products",
  "digital-marketing-ai",
] as const;

export async function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export default function BlogSlugLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

