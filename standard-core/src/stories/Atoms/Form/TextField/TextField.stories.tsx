import Stack from "@mui/material/Stack";
import type { Meta, StoryFn } from "@storybook/nextjs";
import Button from "@the-story/standard-core/atoms/Button/Button";
import FormTextField from "@the-story/standard-core/atoms/Form/TextField";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

export default {
  title: "Atoms/Form/FormTextField",
  component: FormTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof FormTextField>;

interface FormValues {
  exampleField: string;
}

const Template: StoryFn = (args) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { exampleField: "" },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormTextField<FormValues>
          {...args}
          name={args.name}
          label={args.label}
          control={control}
        />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "exampleField",
  label: "Example Label",
  muiProps: {
    placeholder: "Type something...",
  },
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Example Label",
  name: "exampleField",
  muiProps: {
    placeholder: "Type something...",
  },
  rules: {
    required: "This field is required",
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "exampleField",
  label: "Example Label",
  disabled: true,
  muiProps: {
    placeholder: "This field is disabled",
  },
};
