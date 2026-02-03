"use client";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BreadCrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { type SxProps, alpha } from "@mui/material/styles";
import Link from "@the-story/standard-core/atoms/Link/Link";
import type { APIString } from "@the-story/standard-core/types";
import { useTranslations } from "next-intl";
import Script from "next/script";
import type { BreadcrumbList, WithContext } from "schema-dts";

interface CrumbsProps {
  crumbs?: { link?: APIString; href?: APIString }[];
  sx?: SxProps;
  lightVariant?: boolean;
}

const Crumbs = ({ crumbs = [], sx, lightVariant = false }: CrumbsProps) => {
  const t = useTranslations("components.nav.navItems");

  const linkProps = {
    color: "inherit",
    underline: "hover",
    textTransform: "capitalize",
  } as const;

  const convertToSchema: WithContext<BreadcrumbList>["itemListElement"] =
    crumbs?.map((value, i) => {
      if (!value.href)
        return {
          "@type": "ListItem",
          position: i + 2,
          name: value.link ?? undefined,
        };

      return {
        "@type": "ListItem",
        position: i + 2,
        name: value.link ?? undefined,
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/${value?.href}`,
      };
    });

  const schemaCrumbs: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("mainSite"),
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      },
      ...convertToSchema,
    ],
  };

  return (
    <>
      <BreadCrumbs
        data-testid="breadcrumbs"
        separator={<ChevronRightIcon fontSize="inherit" />}
        sx={{
          color: ({ palette }) =>
            lightVariant
              ? alpha(palette.primary.contrastText, 0.6)
              : alpha(palette.primary.main, 0.6),
          ...sx,
        }}
      >
        <Link href="/" {...linkProps}>
          {t("mainSite")}
        </Link>

        {crumbs.map(({ href, link }, i) =>
          href ? (
            <Link key={`crumb-${i}`} href={`/${href}`} {...linkProps}>
              {link}
            </Link>
          ) : (
            <Typography
              key={`crumb-${i}`}
              sx={{
                color: lightVariant ? "primary.contrastText" : "primary.main",
                textTransform: "capitalize",
              }}
            >
              {link}
            </Typography>
          ),
        )}
      </BreadCrumbs>
      <Script
        id="schema-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...schemaCrumbs,
          }),
        }}
      />
    </>
  );
};

export default Crumbs;
