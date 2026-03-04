"use client";

import Checkbox, { type CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import type { ReactElement } from "react";
import {
  Controller,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

interface FormCheckboxProps<T extends FieldValues>
  extends UseControllerProps<T> {
  label: string | ReactElement;
  muiProps?: Omit<CheckboxProps, "name" | "defaultValue">;
}

const FormCheckbox = <T extends FieldValues>({
  label,
  name,
  disabled,
  control,
  muiProps,
  ...controllerProps
}: FormCheckboxProps<T>) => (
  <FormControlLabel
    className="form-checkbox"
    slotProps={{
      typography: { className: "form-checkbox-label" },
    }}
    control={
      <Controller
        name={name}
        control={control}
        {...controllerProps}
        render={({ field: { ref, ...rest }, fieldState: { error } }) => (
          <>
            <Checkbox
              sx={{
                height: "fit-content",
                ml: 1,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: !!error ? "error.main" : "text.secondary",
                "& + .MuiTypography-caption": {
                  color: !!error ? "error.main" : "text.secondary",
                },
                alignSelf: "center",
              }}
              checked={!!rest.value}
              inputRef={ref}
              disabled={disabled}
              {...rest}
              {...muiProps}
              className="form-checkbox-input"
            />
          </>
        )}
      />
    }
    label={label}
  />
);

export default FormCheckbox;
