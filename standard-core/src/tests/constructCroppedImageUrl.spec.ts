import { constructCroppedImageUrl } from "../library/utils/constructCroppedImageUrl";
import { afterEach, describe, expect, it } from "vitest";

const previousImageProxy = process.env.NEXT_PUBLIC_IMAGE_PROXY;

afterEach(() => {
  process.env.NEXT_PUBLIC_IMAGE_PROXY = previousImageProxy;
});

describe("constructCroppedImageUrl", () => {
  it("returns the source URL when image proxy is not configured", () => {
    delete process.env.NEXT_PUBLIC_IMAGE_PROXY;

    expect(
      constructCroppedImageUrl({
        url: "data:image/png;base64,example",
        width: 480,
        height: 300,
      }),
    ).toBe("data:image/png;base64,example");
  });

  it("uses the configured image proxy without duplicating its trailing slash", () => {
    process.env.NEXT_PUBLIC_IMAGE_PROXY = "https://images.example.com/";

    const result = constructCroppedImageUrl({
      url: "https://cdn.example.com/image.jpg",
      width: 480,
      height: 300,
    });

    expect(result).toMatch(/^https:\/\/images\.example\.com\/insecure\//);
    expect(result).not.toContain("images.example.com//insecure");
  });
});
