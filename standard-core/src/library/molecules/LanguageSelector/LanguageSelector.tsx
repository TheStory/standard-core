"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@the-story/standard-core/atoms/Link";
import { locales } from "@the-story/standard-core/config/i18n";
import { useLocale } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { type MouseEvent, useEffect, useMemo, useState } from "react";

interface LanguageSelectorTypes {
  color: "primary" | "white";
}

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

const LanguageSelector = ({ color }: LanguageSelectorTypes) => {
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
        // If it's not a valid URL, fallback to currentUrl which is already normalized
        return currentUrl;
      }
    };

    return (l: string) => {
      if (alternateLanguages && alternateLanguages.length > 0) {
        const href = alternateLanguages.find(
          (lang) => lang.hreflang === l,
        )?.href;
        if (href) return normalizeHref(href);
      }
      // Fallback to current page path/query without any locale prefix
      return currentUrl;
    };
  }, [alternateLanguages, currentUrl]);

  if (locales.length <= 1) return null;

  return (
    <>
      <Button
        key="lang selector"
        id="language-selector-button"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="small"
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        sx={{
          width: "fit-content",
          color: color === "primary" ? "primary.main" : "white",
        }}
      >
        {lang.toUpperCase()}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        MenuListProps={{
          "aria-labelledby": "language-selector-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          zIndex: 999999,
          "& .MuiMenu-paper": {
            backgroundColor: "white",
          },
        }}
      >
        {locales.map((l) => {
          const href =
            lang === l
              ? currentUrl
              : getHrefForLocale
                ? getHrefForLocale(l)
                : "/";

          return (
            <MenuItem key={`lang-${l}`} selected={lang === l}>
              <Link
                underline="none"
                href={href}
                locale={l}
                onClick={handleClose}
                px="4px"
              >
                {l.toUpperCase()}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
export default LanguageSelector;
