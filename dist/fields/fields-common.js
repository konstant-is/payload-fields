"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sidebarFields = exports.descriptionField = exports.labelField = exports.nameField = exports.subtitleField = exports.titleField = void 0;
const fields_1 = require("./fields");
const deep_1 = require("../lib/deep");
const string_1 = require("../lib/string");
const createTextField = (name, props) => {
    const field = (0, fields_1.textField)({
        name: props?.name ?? name,
        label: props?.label ?? (0, string_1.capitalize)(name),
        required: props?.required,
        admin: {
            condition: props?.condition,
            description: props?.description,
        },
    });
    return (0, deep_1.deepMerge)(field, props?.overrides || {});
};
const createTextAreaField = (name, props) => {
    const field = (0, fields_1.textAreaField)({
        name: props?.name ?? name,
        label: props?.label ?? (0, string_1.capitalize)(name),
        required: props?.required,
        admin: {
            condition: props?.condition,
            description: props?.description,
        },
    });
    return (0, deep_1.deepMerge)(field, props?.overrides || {});
};
/**
 * Creates a text field with name: title and label: Title
 * @param props
 * @returns
 */
const titleField = (props) => {
    return createTextField("title", props);
};
exports.titleField = titleField;
const subtitleField = (props) => {
    return createTextField("subtitle", props);
};
exports.subtitleField = subtitleField;
const nameField = (props) => {
    return createTextField("name", props);
};
exports.nameField = nameField;
/**
 * Creates a text field with name: label and label: Label
 * @param props
 * @returns
 */
const labelField = (props) => {
    return createTextField("label", props);
};
exports.labelField = labelField;
const descriptionField = (props) => {
    return createTextAreaField("description", props);
};
exports.descriptionField = descriptionField;
const sidebarFields = (props) => {
    return props.fields.map((field) => {
        return (0, deep_1.deepMerge)(field, {
            admin: {
                position: "sidebar",
            },
        });
    });
};
exports.sidebarFields = sidebarFields;
