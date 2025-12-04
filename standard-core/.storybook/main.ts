// @ts-ignore
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  framework: "@storybook/nextjs",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@chromatic-com/storybook", "@storybook/addon-docs"],
  staticDirs: ["../public"],
  env: (config) => ({
    ...config,
    // Storybook/esbuild requires env values to be strings. Fallback to empty strings when undefined.
    NEXT_PUBLIC_IMAGE_PROXY: process.env.NEXT_PUBLIC_IMAGE_PROXY ?? "",
  }),
};
export default config;
