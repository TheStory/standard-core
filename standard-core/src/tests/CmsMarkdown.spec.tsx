import { CmsMarkdown } from "../library/components/shadcn/atoms/cms-markdown";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

describe("CmsMarkdown", () => {
  it("renders common Markdown elements", () => {
    const markup = renderToStaticMarkup(
      <CmsMarkdown
        markdown={"## Payment\n\nText with **bold**.\n\n- First\n- Second"}
      />,
    );
    expect(markup).toContain(">Payment</h2>");
    expect(markup).toContain("<strong>bold</strong>");
    expect(markup).toContain("list-disc");
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
