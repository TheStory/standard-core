import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { Preview, StoryFn } from "@storybook/react";
import {NextIntlClientProvider} from "next-intl";

const messages = {
  "common": {
    "year": "year",
    "reveal": "Reveal hidden items",
    "seeAll": "See all",
    "readMore": "Read more",
    "backToTop": "Back to top"
  }};



const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});


export const withMuiTheme = (Story: StoryFn) => {
  return (
    <NextIntlClientProvider locale={"en"} messages={messages}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

export const decorators = [withMuiTheme];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }
};

export default preview;
