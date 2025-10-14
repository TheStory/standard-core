"use client";

import TextField, {
  type TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  Controller,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

interface TextFieldProps<T extends FieldValues>
  extends UseControllerProps<T>,
    Required<Pick<MuiTextFieldProps, "label">> {
  muiProps?: Omit<
    MuiTextFieldProps,
    "label" | "name" | "defaultValue" | "disabled"
  >;
}

const TextFieldError = ({ message }: { message: string }) => (
  <Typography color="error" variant="caption">
    {message}
  </Typography>
);

const FormTextField = <T extends FieldValues>({
  name,
  disabled,
  label,
  control,
  muiProps,
  ...ControllerProps
}: TextFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    {...ControllerProps}
    render={({ field: { ref, ...rest }, fieldState: { error } }) => (
      <TextField
        helperText={
          error ? <TextFieldError message={error.message || ""} /> : ""
        }
        size="small"
        label={label}
        error={!!error}
        variant="outlined"
        inputRef={ref}
        disabled={disabled}
        slotProps={{
          inputLabel: {
            sx: {
              color: "text.primary",
            },
          },
        }}
        {...rest}
        {...muiProps}
      />
    )}
  />
);

export default FormTextField;
