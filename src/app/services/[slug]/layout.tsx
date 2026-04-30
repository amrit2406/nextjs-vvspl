import type { ReactNode } from "react";

export const dynamicParams = false;

const SERVICE_SLUGS = ["crm", "defence", "edtech", "erp", "hrms", "ui-ux-design", "back-office-automation", "digital-marketing", "it-staffing"] as const;

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export default function ServiceSlugLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

