"use client";

import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import type { Attribute } from "@strapi/strapi";
import type { ReactNode } from "react";
import slugify from "slugify";

const generateId = (children: ReactNode) =>
  slugify((children as { props: { text: string } }[])[0].props.text, {
    lower: true,
  });

type BlockElements =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "blockquote"
  | "list";

export interface CmsRichTextProps {
  blocks: Attribute.Blocks | BlocksContent | undefined;
  globalDisableHeadings?: boolean;
  exclude?: BlockElements[];
  componentProps?: Partial<{
    [key in BlockElements]: TypographyProps;
  }>;
}

const resetMarginsSx = {
  "&:first-child": {
    mt: 0,
  },
  "&:last-child": {
    mb: 0,
  },
};

const CmsRichText = ({
  blocks,
  globalDisableHeadings = false,
  componentProps,
  exclude,
}: CmsRichTextProps) => {
  if (!blocks) return null;

  return (
    <BlocksRenderer
      content={blocks as BlocksContent}
      blocks={{
        paragraph: ({ children }) => {
          if (exclude?.includes("p")) return null;
          return (
            <Typography
              component={globalDisableHeadings ? "" : "p"}
              variant="body1"
              sx={{
                mb: 4,
                ...(componentProps ? componentProps["p"]?.sx : {}),
                ...resetMarginsSx,
              }}
              {...(componentProps ? componentProps["p"] : {})}
            >
              {children}
            </Typography>
          );
        },
        heading: ({ children, level }) => {
          const targetElement = level === 1 ? "h2" : (`h${level}` as const);
          if (exclude?.includes(targetElement)) return null;

          return (
            <Typography
              component={targetElement}
              variant={targetElement}
              sx={{
                mb: 3,
                ...(componentProps
                  ? componentProps[`${targetElement}`]?.sx
                  : {}),
                ...resetMarginsSx,
              }}
              id={targetElement === "h2" ? generateId(children) : ""}
              {...(componentProps ? componentProps[`${targetElement}`] : {})}
            >
              {children}
            </Typography>
          );
        },
        code: ({ children }) => (
          <Paper
            component="code"
            sx={{
              p: 1,
              my: { xs: 3, lg: 6 },
              whiteSpace: "pre",
              display: "block",
              ...resetMarginsSx,
            }}
          >
            {children}
          </Paper>
        ),
        quote: ({ children }) => {
          if (exclude?.includes("blockquote")) return null;
          return (
            <Typography
              variant="h5"
              component="blockquote"
              sx={{
                my: 6,
                pl: { xs: 2, lg: 3 },
                borderLeft: `2px solid`,
                borderColor: "secondary.main",
                ...resetMarginsSx,
              }}
            >
              {children}
            </Typography>
          );
        },
        link: ({ children, url }) => {
          const props = url.startsWith("http")
            ? { rel: "noopener nofollow", target: "_blank" }
            : {};

          return (
            <Link href={url} {...props}>
              {children}
            </Link>
          );
        },
        list: ({ children, format }) => {
          if (exclude?.includes("list")) return null;
          if (!children) return null;

          return (
            <List
              component={format === "ordered" ? "ol" : "ul"}
              dense
              sx={{
                py: 0,
                pl: 3,
                mt: -3,
                mb: 4,
                listStyle: format === "ordered" ? "decimal" : "disc",
                listStylePosition: "outside",
                ...resetMarginsSx,
              }}
            >
              {children}
            </List>
          );
        },
        "list-item": ({ children }) => (
          <ListItem sx={{ display: "list-item", pl: 1 }}>{children}</ListItem>
        ),
        image: () => null,
      }}
    />
  );
};

export default CmsRichText;
