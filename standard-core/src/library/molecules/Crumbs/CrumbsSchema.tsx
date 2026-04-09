import type { APIString } from "@the-story/standard-core/types";
import type { BreadcrumbList, WithContext } from "schema-dts";

export interface BreadcrumbSchemaProps {
  crumbs?: { link?: APIString; href?: APIString }[];
  locale: string;
  pageUrl: string;
  homeLabel: string;
  baseUrl?: string;
}

const buildItemUrl = ({
  href,
  localeBase,
}: {
  href: string;
  localeBase: string;
}) => {
  if (!href) return undefined;
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }
  const normalizedHref = href.startsWith("/") ? href.slice(1) : href;
  return normalizedHref ? `${localeBase}/${normalizedHref}` : undefined;
};

const CrumbsSchema = ({
  crumbs = [],
  locale,
  pageUrl,
  homeLabel,
  baseUrl,
}: BreadcrumbSchemaProps) => {
  const normalizedPageUrl = pageUrl?.toString().replace(/\/$/, "") || "";
  const normalizedBaseUrl = (baseUrl ?? process.env.NEXT_PUBLIC_BASE_URL ?? "")
    .toString()
    .replace(/\/$/, "");
  const derivedBaseUrl =
    normalizedBaseUrl ||
    (locale ? normalizedPageUrl.split(`/${locale}`)[0] : normalizedPageUrl);

  if (!normalizedPageUrl || !derivedBaseUrl || !locale || !homeLabel) {
    return null;
  }

  const localeBase = `${derivedBaseUrl}/${locale}`;
  const itemListElement: WithContext<BreadcrumbList>["itemListElement"] = [
    {
      "@type": "ListItem",
      "@id": `${normalizedPageUrl}#breadcrumb-1`,
      position: 1,
      name: homeLabel,
      item: {
        "@id": localeBase,
      },
    },
    ...crumbs.map((crumb, index) => {
      const href = crumb.href?.toString() ?? "";
      const itemUrl = buildItemUrl({ href, localeBase });

      return {
        "@type": "ListItem",
        "@id": `${normalizedPageUrl}#breadcrumb-${index + 2}`,
        position: index + 2,
        name: crumb.link ?? undefined,
        item: itemUrl
          ? {
              "@id": itemUrl,
            }
          : undefined,
      };
    }),
  ];

  const structuredData: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${normalizedPageUrl}#breadcrumb`,
    itemListElement,
  };

  return (
    <script
      id="schema-breadcrumbs"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default CrumbsSchema;
