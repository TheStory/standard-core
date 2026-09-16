"use client";

import { useLanguageSelector } from "../../../hooks/useLanguageSelector";
import { Button } from "../atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";
import { Link } from "../atoms/link";
import { Languages } from "lucide-react";

function LanguageSelector() {
  const { lang, locales, currentUrl, getHrefForLocale, hasMultipleLocales } =
    useLanguageSelector();
  if (!hasMultipleLocales) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Languages /> {lang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={
                lang === locale
                  ? currentUrl
                  : (getHrefForLocale?.(locale) ?? "/")
              }
              locale={locale}
              className="no-underline"
            >
              {locale.toUpperCase()}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { LanguageSelector };
