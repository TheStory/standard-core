"use client";

import { locales } from "../config/i18n";
import { useLocale } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type AlternateLanguage = { href: string; hreflang: string };

export function useLanguageSelector() {
  const lang = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [alternates, setAlternates] = useState<AlternateLanguage[]>([]);

  useEffect(() => {
    setAlternates(
      Array.from(document.querySelectorAll('link[rel="alternate"]')).flatMap(
        (link) => {
          const hreflang = link.getAttribute("hreflang");
          const href = link.getAttribute("href");
          return hreflang && href ? [{ hreflang, href }] : [];
        },
      ),
    );
  }, [pathname]);

  const path = pathname?.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
  const query = searchParams?.toString();
  const currentUrl = query ? `${path}?${query}` : path;
  const getHrefForLocale = useMemo(
    () => (locale: string) => {
      const href = alternates.find(({ hreflang }) => hreflang === locale)?.href;
      if (!href) return currentUrl;
      try {
        const url = new URL(href, window.location.origin);
        return `${url.pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/"}${url.search}`;
      } catch {
        return currentUrl;
      }
    },
    [alternates, currentUrl],
  );

  return {
    lang,
    locales,
    currentUrl,
    getHrefForLocale,
    hasMultipleLocales: locales.length > 1,
  };
}
