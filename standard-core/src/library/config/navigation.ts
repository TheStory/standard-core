import {
  defaultLocale,
  localePrefix,
  locales,
} from "@the-story/standard-core/config/i18n";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix,
});

export const {
  Link: LocalizedLink,
  redirect,
  usePathname,
  useRouter,
} = createNavigation(routing);

export type LinkProps = Parameters<typeof LocalizedLink>[0];
