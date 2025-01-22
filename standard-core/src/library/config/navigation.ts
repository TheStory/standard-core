import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { locales } from "standard-core/config/i18n";

export const routing = defineRouting({
  locales: locales,
  defaultLocale: locales[0],
});

export const {
  Link: LocalizedLink,
  redirect,
  usePathname,
  useRouter,
} = createNavigation(routing);

export type LinkProps = Parameters<typeof LocalizedLink>[0];
