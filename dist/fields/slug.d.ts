import type { Field, FieldHook } from "payload/types";
import { FieldProps } from "./types";
type Props = {
    name?: string;
    label?: string;
    fieldToUse?: string;
    overrides?: Partial<Field>;
    readonly?: boolean;
};
export declare const slugField: (props?: FieldProps<Props>) => Field;
export declare const formatHook: (fallback: string) => FieldHook;
export {};
//# sourceMappingURL=slug.d.ts.map