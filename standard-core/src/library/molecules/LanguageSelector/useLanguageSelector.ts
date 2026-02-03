"use client";

import { locales } from "@the-story/standard-core/config/i18n";
import { useLocale } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { type MouseEvent, useEffect, useMemo, useState } from "react";

type AlternateLanguage = { href: string; hreflang: string };

const getAlternateLanguages = () => {
  const alternateLinks = document.querySelectorAll('link[rel="alternate"]');

  const alternateLanguages = [] as Array<AlternateLanguage>;

  alternateLinks.forEach((link) => {
    const hreflang = link.getAttribute("hreflang");
    const href = link.getAttribute("href");

    if (hreflang && href) {
      alternateLanguages.push({ hreflang, href });
    }
  });

  return alternateLanguages;
};

const useLanguageSelector = () => {
  const lang = useLocale();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [alternateLanguages, setAlternateLanguages] = useState<
    AlternateLanguage[]
  >([]);
  const pathname = usePathname();

  useEffect(() => {
    const alternateLanguagesData = getAlternateLanguages();
    setAlternateLanguages(alternateLanguagesData);
  }, [pathname]);

  const searchParams = useSearchParams();
  let pathnameWithoutLang = pathname?.replace(/^\/[a-z]{2}(?=\/|$)/, "") ?? "/";

  const queryString = searchParams?.toString();
  let currentUrl = pathnameWithoutLang;
  if (queryString) currentUrl += `?${queryString}`;

  const getHrefForLocale = useMemo(() => {
    const normalizeHref = (href: string) => {
      try {
        const url = new URL(href, window.location.origin);
        let path = url.pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
        if (path === "") path = "/";
        return url.search ? `${path}${url.search}` : path;
      } catch {
        return currentUrl;
      }
    };

    return (l: string) => {
      if (alternateLanguages && alternateLanguages.length > 0) {
        const href = alternateLanguages.find(
          (langData) => langData.hreflang === l,
        )?.href;
        if (href) return normalizeHref(href);
      }
      return currentUrl;
    };
  }, [alternateLanguages, currentUrl]);

  return {
    lang,
    locales,
    anchorEl,
    open,
    handleClick,
    handleClose,
    currentUrl,
    getHrefForLocale,
    hasMultipleLocales: locales.length > 1,
  };
};

export default useLanguageSelector;
