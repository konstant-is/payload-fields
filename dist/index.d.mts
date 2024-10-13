import * as payload_types from 'payload/types';
import { Field, TextField, NumberField, TextareaField, RichTextField, SelectField, CheckboxField, RadioField, GroupField, RowField, ArrayField, UploadField, TabsField, Tab, BlockField, PolymorphicRelationshipField, SingleRelationshipField, RelationshipField, CollapsibleField, JSONField, DateField, EmailField, PointField, FieldHook, Block, CollectionConfig, GlobalConfig } from 'payload/types';
import { RowLabelFunction } from 'payload/dist/admin/components/forms/RowLabel/types';

type FieldProps<P = unknown> = P & {
    overrides?: Partial<Field>;
    fields?: Field[];
    required?: boolean;
    label?: string;
    name?: string;
    condition?: (data: any, siblingData: any) => boolean;
    hideGutter?: boolean;
    hidden?: boolean;
    description?: string;
    localized?: boolean;
};

type TextFieldProps = FieldProps<{
    name?: string;
    label?: string;
    description?: string;
}>;
/**
 * Creates a text field with name: title and label: Title
 * @param props
 * @returns
 */
declare const titleField: (props?: TextFieldProps) => Field;
declare const subtitleField: (props?: TextFieldProps) => Field;
declare const nameField: (props?: TextFieldProps) => Field;
/**
 * Creates a text field with name: label and label: Label
 * @param props
 * @returns
 */
declare const labelField: (props?: TextFieldProps) => payload_types.TextField;
declare const descriptionField: (props?: FieldProps<{
    name?: string;
    label?: string;
    description?: string;
}>) => payload_types.TextareaField;
declare const sidebarFields: (props: {
    fields: Field[];
}) => Field[];

declare const field: (props: Field) => Field;
declare const textField: (props: Omit<TextField, "type">) => TextField;
declare const numberField: (props: Omit<NumberField, "type">) => NumberField;
declare const textAreaField: (props: Omit<TextareaField, "type">) => TextareaField;
declare const richTextField: (props: Omit<RichTextField, "type">) => RichTextField;
declare const selectField: (props: Omit<SelectField, "type">) => SelectField;
declare const checkboxField: (props: Omit<CheckboxField, "type">) => CheckboxField;
declare const radioField: (props: Omit<RadioField, "type">) => RadioField;
declare const groupField: (props: Omit<GroupField, "type">) => GroupField;
declare const rowField: (props: Omit<RowField, "type">) => RowField;
declare const arrayField: (props: Omit<ArrayField, "type"> & {
    rowLabel?: RowLabelFunction;
}) => ArrayField;
declare const uploadField: (props: Omit<UploadField, "type">) => UploadField;
declare const tabsField: (props: Omit<TabsField, "type">) => TabsField;
declare const tabField: (props: Tab) => Tab;
declare const blockField: (props: Omit<BlockField, "type">) => BlockField;
declare const relationshipField: (props: Omit<PolymorphicRelationshipField, "type"> | Omit<SingleRelationshipField, "type">) => RelationshipField;
declare const collapsibleField: (props: Omit<CollapsibleField, "type">) => CollapsibleField;
declare const jsonField: (props: Omit<JSONField, "type">) => JSONField;
declare const dateField: (props: Omit<DateField, "type">) => DateField;
declare const emailField: (props: Omit<EmailField, "type">) => EmailField;
declare const pointField: (props: Omit<PointField, "type">) => PointField;

type Props$1 = {
    name?: string;
    label?: string;
    fieldToUse?: string;
    overrides?: Partial<Field>;
    readonly?: boolean;
};
declare const slugField: (props?: FieldProps<Props$1>) => Field;
declare const formatHook: (fallback: string) => FieldHook;

type Props<P = unknown> = P;
type BlockCreationFunction = <P>(props: Props<P>) => Block;
declare const createBlock: (blockCreationFunction: BlockCreationFunction) => (props: Props) => Block;

declare const createCollection: (props: CollectionConfig) => CollectionConfig;

declare const createGlobalConfig: (props: GlobalConfig) => GlobalConfig;

type BlockConfig = Record<string, (props: unknown) => Block>;
type BlockKey = keyof BlockConfig;
declare const useBlocks: (config: BlockConfig) => {
    filter: (predicate: (value: string, index: number) => boolean) => void;
    exclude: (...blocks: BlockKey[]) => any;
    build: (params?: unknown) => Block[];
    only: (...blocks: BlockKey[]) => any;
};
declare const useBlockHelper: (props: {
    config: BlockConfig;
}) => {
    filter: (predicate: (value: string, index: number) => boolean) => void;
    exclude: (...blocks: BlockKey[]) => any;
    build: (params?: unknown) => Block[];
    only: (...blocks: BlockKey[]) => any;
};

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
declare function isObject(item: unknown): boolean;
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
declare function deepMerge<T, R>(target: T, source: R): T;

export { type FieldProps, arrayField, blockField, checkboxField, collapsibleField, createBlock, createCollection, createGlobalConfig, dateField, deepMerge, descriptionField, emailField, field, formatHook, groupField, isObject, jsonField, labelField, nameField, numberField, pointField, radioField, relationshipField, richTextField, rowField, selectField, sidebarFields, slugField, subtitleField, tabField, tabsField, textAreaField, textField, titleField, uploadField, useBlockHelper, useBlocks };
