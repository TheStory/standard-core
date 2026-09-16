"use client";

import type { APINullable } from "../../../types";
import { isBlocksEmpty } from "../../../utils/hasBlocks";
import { cn } from "../utils/cn";
import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";

import { Link } from "./link";

type BlockElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "blockquote"
  | "list";
type CmsRichTextProps = {
  blocks: BlocksContent | APINullable;
  globalDisableHeadings?: boolean;
  exclude?: BlockElement[];
  className?: string;
};

function CmsRichText({ blocks, exclude, className }: CmsRichTextProps) {
  if (isBlocksEmpty(blocks)) return null;
  return (
    <div className={cn("grid gap-4", className)} data-testid="rich-text">
      <BlocksRenderer
        content={blocks as BlocksContent}
        blocks={{
          paragraph: ({ children }) =>
            exclude?.includes("p") ? null : <p>{children}</p>,
          heading: ({ children, level }) => {
            const tag = level === 1 ? "h2" : (`h${level}` as BlockElement);
            if (exclude?.includes(tag)) return null;
            const Heading = tag as "h2" | "h3" | "h4" | "h5" | "h6";
            return <Heading className="font-semibold">{children}</Heading>;
          },
          code: ({ children }) => (
            <code className="block whitespace-pre rounded-md bg-muted p-4">
              {children}
            </code>
          ),
          quote: ({ children }) =>
            exclude?.includes("blockquote") ? null : (
              <blockquote className="border-l-2 pl-4 italic">
                {children}
              </blockquote>
            ),
          link: ({ children, url }) => <Link href={url}>{children}</Link>,
          list: ({ children, format }) =>
            exclude?.includes("list") ? null : format === "ordered" ? (
              <ol className="list-decimal pl-6">{children}</ol>
            ) : (
              <ul className="list-disc pl-6">{children}</ul>
            ),
          "list-item": ({ children }) => <li>{children}</li>,
          image: () => null,
        }}
      />
    </div>
  );
}

export { CmsRichText };
export type { CmsRichTextProps };
