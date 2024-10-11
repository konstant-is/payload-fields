import type { Field } from "payload/types";
import { FieldProps } from "./types";
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
export declare const titleField: (props?: TextFieldProps) => Field;
export declare const subtitleField: (props?: TextFieldProps) => Field;
export declare const nameField: (props?: TextFieldProps) => Field;
/**
 * Creates a text field with name: label and label: Label
 * @param props
 * @returns
 */
export declare const labelField: (props?: TextFieldProps) => import("payload/types").TextField;
export declare const descriptionField: (props?: FieldProps<{
    name?: string;
    label?: string;
    description?: string;
}>) => import("payload/types").TextareaField;
export declare const sidebarFields: (props: {
    fields: Field[];
}) => Field[];
export {};
//# sourceMappingURL=fields-common.d.ts.map