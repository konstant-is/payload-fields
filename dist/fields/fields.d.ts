import { RowLabelFunction } from "payload/dist/admin/components/forms/RowLabel/types";
import { ArrayField, BlockField, CheckboxField, CollapsibleField, DateField, EmailField, Field, GroupField, JSONField, NumberField, PointField, PolymorphicRelationshipField, RadioField, RelationshipField, RichTextField, RowField, SelectField, SingleRelationshipField, Tab, TabsField, TextareaField, TextField, UploadField } from "payload/types";
export declare const field: (props: Field) => Field;
export declare const textField: (props: Omit<TextField, "type">) => TextField;
export declare const numberField: (props: Omit<NumberField, "type">) => NumberField;
export declare const textAreaField: (props: Omit<TextareaField, "type">) => TextareaField;
export declare const richTextField: (props: Omit<RichTextField, "type">) => RichTextField;
export declare const selectField: (props: Omit<SelectField, "type">) => SelectField;
export declare const checkboxField: (props: Omit<CheckboxField, "type">) => CheckboxField;
export declare const radioField: (props: Omit<RadioField, "type">) => RadioField;
export declare const groupField: (props: Omit<GroupField, "type">) => GroupField;
export declare const rowField: (props: Omit<RowField, "type">) => RowField;
export declare const arrayField: (props: Omit<ArrayField, "type"> & {
    rowLabel?: RowLabelFunction;
}) => ArrayField;
export declare const uploadField: (props: Omit<UploadField, "type">) => UploadField;
export declare const tabsField: (props: Omit<TabsField, "type">) => TabsField;
export declare const tabField: (props: Tab) => Tab;
export declare const blockField: (props: Omit<BlockField, "type">) => BlockField;
export declare const relationshipField: (props: Omit<PolymorphicRelationshipField, "type"> | Omit<SingleRelationshipField, "type">) => RelationshipField;
export declare const collapsibleField: (props: Omit<CollapsibleField, "type">) => CollapsibleField;
export declare const jsonField: (props: Omit<JSONField, "type">) => JSONField;
export declare const dateField: (props: Omit<DateField, "type">) => DateField;
export declare const emailField: (props: Omit<EmailField, "type">) => EmailField;
export declare const pointField: (props: Omit<PointField, "type">) => PointField;
//# sourceMappingURL=fields.d.ts.map