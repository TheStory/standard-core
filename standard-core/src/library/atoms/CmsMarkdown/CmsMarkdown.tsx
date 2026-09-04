"use client";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import type { StackProps } from "@mui/material/Stack";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "@the-story/standard-core/atoms/Link";
import type { APIString } from "@the-story/standard-core/types";
import ReactMarkdown from "react-markdown";

export interface CmsMarkdownProps extends StackProps {
  markdown: APIString;
}

const CmsMarkdown = ({ markdown, sx, ...props }: CmsMarkdownProps) => {
  if (!markdown?.trim()) return null;

  return (
    <Stack
      className="cms-markdown"
      data-testid="markdown"
      sx={[
        {
          gap: 2,
          "& > :first-child": { pt: 0 },
          "& h1, & h2, & h3, & h4, & h5, & h6": { pt: 2 },
          "& ul, & ol": { my: 0, pl: 2.2 },
          "& blockquote": {
            borderColor: "secondary.main",
            borderLeft: 2,
            m: 0,
            px: 3,
          },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    >
      <ReactMarkdown
        skipHtml
        components={{
          h1: ({ children }) => (
            <Typography variant="h6" component="div">
              {children}
            </Typography>
          ),
          h2: ({ children }) => (
            <Typography variant="h6" component="div">
              {children}
            </Typography>
          ),
          h3: ({ children }) => (
            <Typography variant="h6" component="div">
              {children}
            </Typography>
          ),
          h4: ({ children }) => (
            <Typography variant="h6" component="div">
              {children}
            </Typography>
          ),
          h5: ({ children }) => (
            <Typography variant="h6" component="div">
              {children}
            </Typography>
          ),
          h6: ({ children }) => (
            <Typography variant="h6" component="div">
              {children}
            </Typography>
          ),
          p: ({ children }) => (
            <Typography variant="body1" component="div">
              {children}
            </Typography>
          ),
          blockquote: ({ children }) => (
            <Typography component="div" variant="body1">
              {children}
            </Typography>
          ),
          ul: ({ children }) => (
            <List
              component="ul"
              dense
              sx={{
                listStyle: "disc",
                listStylePosition: "outside",
                py: 0,
              }}
            >
              {children}
            </List>
          ),
          ol: ({ children }) => (
            <List
              component="ol"
              dense
              sx={{
                listStyle: "decimal",
                listStylePosition: "outside",
                py: 0,
              }}
            >
              {children}
            </List>
          ),
          li: ({ children }) => (
            <ListItem sx={{ display: "list-item", pl: 1, py: 0 }}>
              {children}
            </ListItem>
          ),
          a: ({ children, href }) => <Link href={href ?? ""}>{children}</Link>,
          strong: ({ children }) => (
            <Typography component="strong" variant="inherit">
              {children}
            </Typography>
          ),
          em: ({ children }) => (
            <Typography component="em" variant="inherit">
              {children}
            </Typography>
          ),
          pre: ({ children }) => (
            <Paper
              component="pre"
              sx={{ overflowX: "auto", p: 2, whiteSpace: "pre" }}
            >
              {children}
            </Paper>
          ),
          code: ({ children }) => (
            <Typography
              component="code"
              variant="inherit"
              sx={{ bgcolor: "action.hover", px: 0.5 }}
            >
              {children}
            </Typography>
          ),
          hr: () => <Divider />,
          img: () => null,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Stack>
  );
};

export default CmsMarkdown;
