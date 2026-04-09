"use client";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BreadCrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { type SxProps, alpha } from "@mui/material/styles";
import Link from "@the-story/standard-core/atoms/Link/Link";
import type { APIString } from "@the-story/standard-core/types";
import { useTranslations } from "next-intl";

import type { BreadcrumbSchemaProps } from "./CrumbsSchema";
import CrumbsSchema from "./CrumbsSchema";

export interface CrumbsProps {
  crumbs?: { link?: APIString; href?: APIString }[];
  sx?: SxProps;
  lightVariant?: boolean;
  schema?: BreadcrumbSchemaProps;
}

const Crumbs = ({
  crumbs = [],
  sx,
  lightVariant = false,
  schema,
}: CrumbsProps) => {
  const t = useTranslations("components.nav.navItems");
  const resolvedCrumbs = crumbs.length ? crumbs : (schema?.crumbs ?? []);

  const linkProps = {
    color: "inherit",
    underline: "hover",
    textTransform: "capitalize",
  } as const;

  return (
    <>
      {schema && <CrumbsSchema {...schema} crumbs={resolvedCrumbs} />}
      <BreadCrumbs
        data-testid="breadcrumbs"
        className="breadcrumbs"
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

        {resolvedCrumbs.map(({ href, link }, i) =>
          href ? (
            <Link key={`crumb-${i}`} href={`/${href}`} {...linkProps}>
              {link}
            </Link>
          ) : (
            <Typography
              key={`crumb-${i}`}
              className="breadcrumb-current"
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
    </>
  );
};

export default Crumbs;
