"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { locales } from "@thestory/standard-core/config/i18n";
import { LocalizedLink } from "@thestory/standard-core/config/navigation";
import { useLocale } from "next-intl";
import { type MouseEvent, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface LanguageSelectorTypes {
  color: "primary" | "white";
}

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

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pathnameWithoutLang = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
  const currentUrl = `${pathnameWithoutLang}${searchParams ? `?${searchParams.toString()}` : ""}`;

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
        {locales.map((l) => (
          <MenuItem key={`lang-${l}`} selected={lang === l}>
            <Link
              component={LocalizedLink as any}
              underline="none"
              href={currentUrl}
              locale={l}
              onClick={handleClose}
              px="4px"
            >
              {l.toUpperCase()}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default LanguageSelector;
