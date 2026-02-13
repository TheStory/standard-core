import { simpleMarkdown } from "../library/utils/simpleMarkdown";
import { describe, expect, it } from "vitest";

describe("simpleMarkdown", () => {
  it("returns null for empty values", () => {
    expect(simpleMarkdown(null)).toBeNull();
    expect(simpleMarkdown(undefined)).toBeNull();
    expect(simpleMarkdown("")).toBeNull();
  });

  it("renders a span wrapper", () => {
    const result = simpleMarkdown("test");
    expect(result?.type).toBe("span");
  });

  it("renders bold, em and <br /> replacements", () => {
    const result = simpleMarkdown("Lorem *ipsum* _dolor_|sit");
    expect(result?.props?.dangerouslySetInnerHTML?.__html).toBe(
      "Lorem <strong>ipsum</strong> <em>dolor</em><br />sit",
    );
  });
});
