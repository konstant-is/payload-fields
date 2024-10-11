import type { Field } from "payload/types";
export type FieldProps<P = unknown> = P & {
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
//# sourceMappingURL=types.d.ts.map