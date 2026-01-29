"use client";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import { Link } from "@the-story/standard-core/atoms/Link";
import type { APINullable } from "@the-story/standard-core/types";
import {
  hasBlocks,
  isBlocksEmpty,
} from "@the-story/standard-core/utils/hasBlocks";

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
  blocks: BlocksContent | APINullable;
  globalDisableHeadings?: boolean;
  exclude?: BlockElements[];
  componentProps?: Partial<{
    [key in BlockElements]: TypographyProps;
  }>;
}

const CmsRichText = ({
  blocks,
  globalDisableHeadings = false,
  componentProps,
  exclude,
}: CmsRichTextProps) => {
  if (isBlocksEmpty(blocks)) return null;

  return (
    <Stack
      className="rich-text"
      spacing={3}
      sx={{
        "& > h2.MuiTypography-h2, & > h3.MuiTypography-h3, & > h4.MuiTypography-h4, & > h5.MuiTypography-h5, & > h6.MuiTypography-h6":
          { mt: 4, mb: -1 },
        "& .MuiTypography-root:first-child": { mt: 0 },
        "& .MuiTypography-root:last-child": { mb: 0 },
      }}
    >
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
                  ...(componentProps ? componentProps["p"]?.sx : {}),
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
                  ...(componentProps
                    ? componentProps[`${targetElement}`]?.sx
                    : {}),
                }}
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
                whiteSpace: "pre",
                display: "block",
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
                  p: { xs: 2, lg: 3 },
                  borderLeft: `2px solid`,
                  borderColor: "secondary.main",
                }}
              >
                {children}
              </Typography>
            );
          },
          link: ({ children, url }) => {
            return <Link href={url}>{children}</Link>;
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
                  listStyle: format === "ordered" ? "decimal" : "disc",
                  listStylePosition: "outside",
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
    </Stack>
  );
};

export default CmsRichText;
