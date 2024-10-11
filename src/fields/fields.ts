import { deepMerge } from "../lib/deep";
import { capitalize } from "../lib/string";
import { RowLabelFunction } from "payload/dist/admin/components/forms/RowLabel/types";
import {
  ArrayField,
  BlockField,
  CheckboxField,
  CollapsibleField,
  DateField,
  EmailField,
  Field,
  GroupField,
  JSONField,
  NumberField,
  PointField,
  PolymorphicRelationshipField,
  RadioField,
  RelationshipField,
  RichTextField,
  RowField,
  SelectField,
  SingleRelationshipField,
  Tab,
  TabsField,
  TextareaField,
  TextField,
  UploadField,
} from "payload/types";

const fieldBaseProps = <T>(props: T) => ({
  required: true,
  localized: true,
  ...props,
});

export const field = (props: Field): Field => ({ ...props });

export const textField = (props: Omit<TextField, "type">): TextField => {
  const type = "text";
  const fieldLabel = props.label ?? capitalize(props.name);

  if (props.hasMany) {
    return {
      type,
      ...fieldBaseProps(props),
      label: fieldLabel,
      hasMany: true,
    };
  }

  return {
    type,
    ...fieldBaseProps(props),
    label: fieldLabel,
    hasMany: false,
    maxRows: undefined,
    minRows: undefined,
  };
};

export const numberField = (props: Omit<NumberField, "type">): NumberField => {
  if (props.hasMany) {
    return {
      type: "number",
      ...fieldBaseProps(props),
      hasMany: true,
    };
  }
  return {
    type: "number",
    ...fieldBaseProps(props),
    hasMany: false,
    maxRows: undefined,
    minRows: undefined,
  };
};

export const textAreaField = (
  props: Omit<TextareaField, "type">
): TextareaField => {
  return {
    type: "textarea",
    ...fieldBaseProps(props),
  };
};

export const richTextField = (
  props: Omit<RichTextField, "type">
): RichTextField => ({
  type: "richText",
  ...fieldBaseProps(props),
});

export const selectField = (props: Omit<SelectField, "type">): SelectField => {
  return {
    type: "select",
    ...fieldBaseProps(props),
  };
};

export const checkboxField = (
  props: Omit<CheckboxField, "type">
): CheckboxField => ({
  type: "checkbox",
  ...fieldBaseProps(props),
});

export const radioField = (props: Omit<RadioField, "type">): RadioField => {
  return {
    type: "radio",
    ...fieldBaseProps(props),
  };
};

export const groupField = (props: Omit<GroupField, "type">): GroupField => {
  const { label, ...rest } = props;
  return {
    type: "group",
    label: label === undefined ? false : label,
    ...fieldBaseProps(rest),
  };
};

export const rowField = (props: Omit<RowField, "type">): RowField => ({
  type: "row",
  ...fieldBaseProps(props),
});

export const arrayField = (
  props: Omit<ArrayField, "type"> & { rowLabel?: RowLabelFunction }
): ArrayField => {
  const { rowLabel, ...rest } = props;

  const interfaceName = props.interfaceName || props.name;

  return deepMerge(
    {
      type: "array",
      ...fieldBaseProps(rest),
      interfaceName: `${interfaceName}Array`,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: rowLabel,
        },
      },
    },
    { admin: props.admin ?? {} }
  );
};

export const uploadField = (props: Omit<UploadField, "type">): UploadField => {
  return {
    type: "upload",
    ...fieldBaseProps(props),
  };
};

export const tabsField = (props: Omit<TabsField, "type">): TabsField => {
  return {
    type: "tabs",
    ...props,
  };
};

export const tabField = (props: Tab): Tab => {
  return {
    ...props,
  };
};

export const blockField = (props: Omit<BlockField, "type">): BlockField => ({
  type: "blocks",
  ...props,
});

export const relationshipField = (
  props:
    | Omit<PolymorphicRelationshipField, "type">
    | Omit<SingleRelationshipField, "type">
): RelationshipField => {
  if (isPolymorphicRelationshipField(props)) {
    return {
      ...fieldBaseProps(props),
      type: "relationship",
      hasMany: true,
    };
  }

  // if (isSingleRelationshipField(props)) {
  return {
    type: "relationship",
    ...fieldBaseProps(props),
    hasMany: false,
    max: undefined,
    maxRows: undefined,
    min: undefined,
    minRows: undefined,
  };
  // }
};

function isSingleRelationshipField(
  props: Omit<RelationshipField, "type">
): props is SingleRelationshipField {
  return props.hasMany === false;
}

function isPolymorphicRelationshipField(
  props: Omit<RelationshipField, "type">
): props is PolymorphicRelationshipField {
  return props.hasMany === true;
}

export const collapsibleField = (
  props: Omit<CollapsibleField, "type">
): CollapsibleField => {
  return {
    type: "collapsible",
    ...props,
    admin: {
      initCollapsed: true,
      ...props.admin,
    },
  };
};

export const jsonField = (props: Omit<JSONField, "type">): JSONField => {
  return {
    type: "json",
    ...fieldBaseProps(props),
  };
};

export const dateField = (props: Omit<DateField, "type">): DateField => {
  return {
    type: "date",
    ...fieldBaseProps(props),
  };
};

export const emailField = (props: Omit<EmailField, "type">): EmailField => {
  return {
    type: "email",

    ...fieldBaseProps(props),
  };
};

export const pointField = (props: Omit<PointField, "type">): PointField => {
  return {
    type: "point",
    ...fieldBaseProps(props),
  };
};
