"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@the-story/standard-core/atoms/Link";

import useLanguageSelector from "./useLanguageSelector";

interface LanguageSelectorTypes {
  color: "primary" | "white";
}

const LanguageSelector = ({ color }: LanguageSelectorTypes) => {
  const {
    lang,
    locales,
    anchorEl,
    open,
    handleClick,
    handleClose,
    currentUrl,
    getHrefForLocale,
    hasMultipleLocales,
  } = useLanguageSelector();

  if (!hasMultipleLocales) return null;

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
