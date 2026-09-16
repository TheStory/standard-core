"use client";

import type { APIString } from "../../../types";
import { cn } from "../utils/cn";
import ReactMarkdown from "react-markdown";

import { Separator } from "./separator";

type CmsMarkdownProps = { markdown: APIString; className?: string };

function CmsMarkdown({ markdown, className }: CmsMarkdownProps) {
  if (!markdown?.trim()) return null;
  return (
    <div className={cn("grid gap-4", className)} data-testid="markdown">
      <ReactMarkdown
        skipHtml
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-semibold">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold">{children}</h3>
          ),
          h4: ({ children }) => <h4 className="font-semibold">{children}</h4>,
          h5: ({ children }) => <h5 className="font-semibold">{children}</h5>,
          h6: ({ children }) => <h6 className="font-semibold">{children}</h6>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 pl-4 italic">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
          ol: ({ children }) => (
            <ol className="list-decimal pl-6">{children}</ol>
          ),
          a: ({ children, href }) => (
            <a
              className="font-medium text-primary underline-offset-4 hover:underline"
              href={href}
            >
              {children}
            </a>
          ),
          pre: ({ children }) => (
            <pre className="overflow-x-auto rounded-md bg-muted p-4">
              {children}
            </pre>
          ),
          code: ({ children }) => (
            <code className="rounded bg-muted px-1">{children}</code>
          ),
          hr: () => <Separator />,
          img: () => null,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export { CmsMarkdown };
export type { CmsMarkdownProps };
