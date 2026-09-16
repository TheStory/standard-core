import "../src/library/components/shadcn/styles.css";
import type { Preview, StoryFn } from "@storybook/nextjs-vite";
import { NextIntlClientProvider } from "next-intl";

const messages = {
  common: {
    year: "year",
    reveal: "Reveal hidden items",
    seeAll: "See all",
    readMore: "Read more",
    backToTop: "Back to top",
  },
};

export const withProviders = (Story: StoryFn) => (
  <NextIntlClientProvider locale="en" messages={messages}>
    <Story />
  </NextIntlClientProvider>
);

export const decorators = [withProviders];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: { appDirectory: true },
  },
};

export default preview;
