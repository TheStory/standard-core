import type { NestedKeyOf } from "use-intl";
import { z } from "zod";

type MessageKeys = NestedKeyOf<{ name: { error: "Name is required" } }>;

export const theStorySchema = (t: (arg: MessageKeys) => string) =>
  z.object({
    name: z.string().min(1, {
      message: t("name.error"),
    }),
  });

export type TheStorySchema = z.infer<ReturnType<typeof theStorySchema>>;
