import type { Field } from "payload/types";
import { textAreaField, textField } from "./fields";
import { FieldProps } from "./types";
import { deepMerge } from "../lib/deep";
import { capitalize } from "../lib/string";

type TextFieldProps = FieldProps<{
  name?: string;
  label?: string;
  description?: string;
}>;
const createTextField = (name: string, props?: TextFieldProps) => {
  const field = textField({
    name: props?.name ?? name,
    label: props?.label ?? capitalize(name),
    required: props?.required,
    admin: {
      condition: props?.condition,
      description: props?.description,
    },
  });
  return deepMerge(field, props?.overrides || {});
};

const createTextAreaField = (name: string, props?: TextFieldProps) => {
  const field = textAreaField({
    name: props?.name ?? name,
    label: props?.label ?? capitalize(name),
    required: props?.required,
    admin: {
      condition: props?.condition,
      description: props?.description,
    },
  });
  return deepMerge(field, props?.overrides || {});
};
/**
 * Creates a text field with name: title and label: Title
 * @param props
 * @returns
 */
export const titleField = (props?: TextFieldProps): Field => {
  return createTextField("title", props);
};

export const subtitleField = (props?: TextFieldProps): Field => {
  return createTextField("subtitle", props);
};

export const nameField = (props?: TextFieldProps): Field => {
  return createTextField("name", props);
};

/**
 * Creates a text field with name: label and label: Label
 * @param props
 * @returns
 */
export const labelField = (props?: TextFieldProps) => {
  return createTextField("label", props);
};

export const descriptionField = (
  props?: FieldProps<{
    name?: string;
    label?: string;
    description?: string;
  }>
) => {
  return createTextAreaField("description", props);
};

export const sidebarFields = (props: { fields: Field[] }) => {
  return props.fields.map((field) => {
    return deepMerge(field, {
      admin: {
        position: "sidebar",
      },
    });
  });
};
