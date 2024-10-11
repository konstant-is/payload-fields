import { capitalize, slugify } from "../lib/string";
import type { Field, FieldHook } from "payload/types";

import { textField } from "./fields";
import { FieldProps } from "./types";

type Props = {
  name?: string;
  label?: string;
  fieldToUse?: string;
  overrides?: Partial<Field>;
  readonly?: boolean;
};

export const slugField = (props?: FieldProps<Props>): Field => {
  const name = props?.name ?? "slug";
  const fieldToUse = props?.fieldToUse ?? "title";

  const field = textField({
    name: name,
    label: props?.label ?? capitalize(name),
    admin: {
      position: "sidebar",
      readOnly: props?.readonly,
    },
    hooks: {
      beforeValidate: [formatHook(fieldToUse!)],
    },
    index: true,

    ...props,
  });

  return field;
};

export const formatHook =
  (fallback: string): FieldHook =>
  ({ data, operation, originalDoc, value }) => {
    const fallbackData = data?.[fallback] || originalDoc?.[fallback];

    if (typeof value === "string" && value === fallbackData) {
      return slugify(value);
    }

    if (operation === "update") {
      if (fallbackData && typeof fallbackData === "string") {
        return slugify(fallbackData);
      }
    }

    if (operation === "create") {
      if (fallbackData && typeof fallbackData === "string") {
        return slugify(fallbackData);
      }
    }

    return value;
  };
