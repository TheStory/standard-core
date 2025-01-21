import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { localePrefix, locales } from "standard-core/config/i18n";

export const {
  Link: LocalizedLink,
  redirect,
  usePathname,
  useRouter,
} = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});

export type LinkProps = Parameters<typeof LocalizedLink>[0];
