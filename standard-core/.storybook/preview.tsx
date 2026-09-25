import "../src/library/components/shadcn/styles.css";
import type { Preview, StoryFn } from "@storybook/nextjs-vite";
import { TooltipProvider } from "@the-story/standard-core/components/shadcn/atoms/tooltip";
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
  <NextIntlClientProvider locale="en" messages={messages} timeZone="UTC">
    <TooltipProvider>
      <Story />
    </TooltipProvider>
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
