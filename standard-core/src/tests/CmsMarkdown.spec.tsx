import CmsMarkdown from "../library/atoms/CmsMarkdown/CmsMarkdown";
import type { PropsWithChildren } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("@the-story/standard-core/atoms/Link", () => ({
  Link: ({ children, href }: PropsWithChildren<{ href: string }>) => (
    <a href={href}>{children}</a>
  ),
}));

describe("CmsMarkdown", () => {
  it("renders common Markdown elements", () => {
    const markup = renderToStaticMarkup(
      <CmsMarkdown
        markdown={
          "## Payment\n\nText with **bold** and [link](/payment).\n\n- First\n- Second"
        }
      />,
    );

    expect(markup).toContain("MuiTypography-h6");
    expect(markup).toContain(">Payment</div>");
    expect(markup).toContain("MuiTypography-body1");
    expect(markup).toContain("MuiList-root");
    expect(markup).toContain("MuiListItem-root");
    expect(markup).toContain('href="/payment"');
  });

  it("does not render raw HTML or images", () => {
    const markup = renderToStaticMarkup(
      <CmsMarkdown
        markdown={'<script>alert("xss")</script>\n\n![alt](/image.png)'}
      />,
    );

    expect(markup).not.toContain("<script");
    expect(markup).not.toContain("<img");
  });
});
