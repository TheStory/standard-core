import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const ORIGINAL_ENV = { ...process.env };

async function loadUtils(env: Record<string, string | undefined>) {
  vi.resetModules();
  process.env = { ...ORIGINAL_ENV, ...env };
  return import("../library/utils/isExternalLink");
}

describe("isInternalLink/isExternalLink", () => {
  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV };
  });

  afterEach(() => {
    process.env = { ...ORIGINAL_ENV };
  });

  it("treats relative paths as internal", async () => {
    const { isInternalLink, isExternalLink } = await loadUtils({
      NEXT_PUBLIC_BASE_URL: "https://app.example.local",
      NEXT_PUBLIC_CDN: "https://cms.example.local",
    });

    expect(isInternalLink("/about")).toBe(true);
    expect(isExternalLink("/about")).toBe(false);
  });

  it("treats base url as internal", async () => {
    const { isInternalLink, isExternalLink } = await loadUtils({
      NEXT_PUBLIC_BASE_URL: "https://app.example.local",
    });

    expect(isInternalLink("https://app.example.local")).toBe(true);
    expect(isInternalLink("https://app.example.local/about")).toBe(true);
    expect(isExternalLink("https://app.example.local/about")).toBe(false);
  });

  it("treats CMS URL as internal (NEXT_PUBLIC_CDN)", async () => {
    const { isInternalLink, isExternalLink } = await loadUtils({
      NEXT_PUBLIC_CDN: "https://cms.example.local",
    });

    expect(isInternalLink("https://cms.example.local")).toBe(true);
    expect(isInternalLink("https://cms.example.local/uploads/a.jpg")).toBe(
      true,
    );
    expect(isExternalLink("https://cms.example.local/uploads/a.jpg")).toBe(
      false,
    );
  });

  it("treats API endpoint as external when CDN is not set", async () => {
    const { isInternalLink, isExternalLink } = await loadUtils({
      NEXT_PUBLIC_CDN: "",
    });

    expect(isInternalLink("http://api.example.local:1337")).toBe(false);
    expect(isInternalLink("http://api.example.local:1337/api/items")).toBe(
      false,
    );
    expect(isExternalLink("http://api.example.local:1337/api/items")).toBe(
      true,
    );
  });

  it("treats other URLs as external", async () => {
    const { isInternalLink, isExternalLink } = await loadUtils({
      NEXT_PUBLIC_BASE_URL: "https://app.example.local",
      NEXT_PUBLIC_CDN: "https://cms.example.local",
    });

    expect(isInternalLink("https://example.com")).toBe(false);
    expect(isExternalLink("https://example.com")).toBe(true);
  });

  it("returns false for empty values", async () => {
    const { isInternalLink, isExternalLink } = await loadUtils({
      NEXT_PUBLIC_BASE_URL: "https://app.example.local",
    });

    expect(isInternalLink(null)).toBe(true);
    expect(isInternalLink(undefined)).toBe(true);
    expect(isInternalLink("")).toBe(true);
    expect(isExternalLink(null)).toBe(false);
    expect(isExternalLink(undefined)).toBe(false);
    expect(isExternalLink("")).toBe(false);
  });
});
