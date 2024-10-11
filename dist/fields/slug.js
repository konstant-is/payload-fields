"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHook = exports.slugField = void 0;
const string_1 = require("../lib/string");
const fields_1 = require("./fields");
const slugField = (props) => {
    const name = props?.name ?? "slug";
    const fieldToUse = props?.fieldToUse ?? "title";
    const field = (0, fields_1.textField)({
        name: name,
        label: props?.label ?? (0, string_1.capitalize)(name),
        admin: {
            position: "sidebar",
            readOnly: props?.readonly,
        },
        hooks: {
            beforeValidate: [(0, exports.formatHook)(fieldToUse)],
        },
        index: true,
        ...props,
    });
    return field;
};
exports.slugField = slugField;
const formatHook = (fallback) => ({ data, operation, originalDoc, value }) => {
    const fallbackData = data?.[fallback] || originalDoc?.[fallback];
    if (typeof value === "string" && value === fallbackData) {
        return (0, string_1.slugify)(value);
    }
    if (operation === "update") {
        if (fallbackData && typeof fallbackData === "string") {
            return (0, string_1.slugify)(fallbackData);
        }
    }
    if (operation === "create") {
        if (fallbackData && typeof fallbackData === "string") {
            return (0, string_1.slugify)(fallbackData);
        }
    }
    return value;
};
exports.formatHook = formatHook;
