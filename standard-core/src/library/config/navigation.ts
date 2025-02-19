import { locales } from "@thestory/standard-core/config/i18n";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

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
