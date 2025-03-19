import { NextIntlClientProvider } from "next-intl";
import type { PropsWithChildren } from "react";
import type { Timezone } from "use-intl";

const NextIntlClientInheritor = async ({
  locale,
  messages,
  timeZone,
  children,
}: PropsWithChildren<{
  locale: string;
  messages: any;
  timeZone: Timezone;
}>) => (
  <NextIntlClientProvider
    locale={locale}
    messages={messages}
    timeZone={timeZone}
  >
    {children}
  </NextIntlClientProvider>
);

export default NextIntlClientInheritor;
