"use client";

import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import isoCountries from "i18n-iso-countries";
import deCountries from "i18n-iso-countries/langs/de.json";
import enCountries from "i18n-iso-countries/langs/en.json";
import plCountries from "i18n-iso-countries/langs/pl.json";
import { useLocale } from "next-intl";
import type { FocusEvent } from "react";
import { useMemo, useRef, useState } from "react";

isoCountries.registerLocale(deCountries);
isoCountries.registerLocale(enCountries);
isoCountries.registerLocale(plCountries);

export type CountryOption = {
  code: string;
  label: string;
  phone?: string;
};

export type CountryPickerProps = {
  countries?: readonly CountryOption[];
  excludedCountryCodes?: readonly string[];
  locale?: string;
  value?: string;
  onChange?: (countryCode: string) => void;
  label?: string;
  error?: boolean;
  helperText?: TextFieldProps["helperText"];
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  id?: string;
  name?: string;
  autoComplete?: string;
};

const supportedLocales = ["de", "en", "pl"] as const;

const normalizeCountryValue = (value: string) =>
  value
    .trim()
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const CountryPicker = ({
  countries,
  excludedCountryCodes = [],
  locale,
  value = "",
  onChange,
  label = "Choose a country",
  error,
  helperText,
  required,
  disabled,
  fullWidth = true,
  id,
  name,
  autoComplete = "country",
}: CountryPickerProps) => {
  const activeLocale = useLocale();
  const [open, setOpen] = useState(false);
  const suppressOpenUntilInteraction = useRef(false);
  const options = useMemo<readonly CountryOption[]>(() => {
    if (countries) return countries;

    const requestedLocale = (locale ?? activeLocale).split("-")[0];
    const countryLocale = supportedLocales.includes(
      requestedLocale as (typeof supportedLocales)[number],
    )
      ? requestedLocale
      : "en";
    const excludedCodes = new Set(
      excludedCountryCodes.map((code) => code.toUpperCase()),
    );
    return Object.entries(isoCountries.getNames(countryLocale))
      .map(([code, label]) => ({ code, label }))
      .filter((country) => !excludedCodes.has(country.code.toUpperCase()))
      .sort((first, second) =>
        first.label.localeCompare(second.label, countryLocale),
      );
  }, [activeLocale, countries, excludedCountryCodes, locale]);
  const selectedCountry =
    options.find(
      (country) => country.code.toUpperCase() === value.toUpperCase(),
    ) ?? null;
  const autofillCountryCodes = useMemo(() => {
    const aliases = new Map<string, string>();

    options.forEach((country) => {
      const labels = [
        country.code,
        country.label,
        ...supportedLocales.map((language) =>
          isoCountries.getName(country.code, language),
        ),
      ];

      labels.forEach((countryValue) => {
        if (countryValue) {
          aliases.set(
            normalizeCountryValue(countryValue),
            country.code.toUpperCase(),
          );
        }
      });
    });

    return aliases;
  }, [options]);
  const syncAutofilledCountry = (inputValue: string) => {
    const countryCode = autofillCountryCodes.get(
      normalizeCountryValue(inputValue),
    );

    if (countryCode && countryCode !== value.toUpperCase()) {
      onChange?.(countryCode);
    }

    return Boolean(countryCode);
  };

  return (
    <Autocomplete
      id={id}
      options={options}
      value={selectedCountry}
      open={open}
      onOpen={() => {
        if (suppressOpenUntilInteraction.current) return;

        setOpen(true);
      }}
      onClose={() => setOpen(false)}
      onPointerDownCapture={() => {
        suppressOpenUntilInteraction.current = false;
      }}
      onKeyDownCapture={() => {
        suppressOpenUntilInteraction.current = false;
      }}
      disabled={disabled}
      fullWidth={fullWidth}
      autoHighlight
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, selected) =>
        option.code.toUpperCase() === selected.code.toUpperCase()
      }
      onChange={(_, country) => onChange?.(country?.code ?? "")}
      onInputChange={(_, inputValue, reason) => {
        if (reason === "input" && syncAutofilledCountry(inputValue)) {
          suppressOpenUntilInteraction.current = true;
          setOpen(false);
        }
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;

        return (
          <Box component="li" key={key} {...optionProps}>
            <Box
              component="img"
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
              sx={{ mr: 2, flexShrink: 0 }}
            />
            {option.label} ({option.code})
            {option.phone ? ` +${option.phone.replace(/^\+/, "")}` : ""}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          label={label}
          variant="standard"
          error={error}
          helperText={helperText}
          required={required}
          inputProps={{
            ...params.inputProps,
            autoComplete,
            onBlur: (event) => {
              params.inputProps.onBlur?.(event as FocusEvent<HTMLInputElement>);
              syncAutofilledCountry(event.currentTarget.value);
            },
          }}
        />
      )}
    />
  );
};

export default CountryPicker;
