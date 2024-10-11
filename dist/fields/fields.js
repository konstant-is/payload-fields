"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointField = exports.emailField = exports.dateField = exports.jsonField = exports.collapsibleField = exports.relationshipField = exports.blockField = exports.tabField = exports.tabsField = exports.uploadField = exports.arrayField = exports.rowField = exports.groupField = exports.radioField = exports.checkboxField = exports.selectField = exports.richTextField = exports.textAreaField = exports.numberField = exports.textField = exports.field = void 0;
const deep_1 = require("../lib/deep");
const string_1 = require("../lib/string");
const fieldBaseProps = (props) => ({
    required: true,
    localized: true,
    ...props,
});
const field = (props) => ({ ...props });
exports.field = field;
const textField = (props) => {
    const type = "text";
    const fieldLabel = props.label ?? (0, string_1.capitalize)(props.name);
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
exports.textField = textField;
const numberField = (props) => {
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
exports.numberField = numberField;
const textAreaField = (props) => {
    return {
        type: "textarea",
        ...fieldBaseProps(props),
    };
};
exports.textAreaField = textAreaField;
const richTextField = (props) => ({
    type: "richText",
    ...fieldBaseProps(props),
});
exports.richTextField = richTextField;
const selectField = (props) => {
    return {
        type: "select",
        ...fieldBaseProps(props),
    };
};
exports.selectField = selectField;
const checkboxField = (props) => ({
    type: "checkbox",
    ...fieldBaseProps(props),
});
exports.checkboxField = checkboxField;
const radioField = (props) => {
    return {
        type: "radio",
        ...fieldBaseProps(props),
    };
};
exports.radioField = radioField;
const groupField = (props) => {
    const { label, ...rest } = props;
    return {
        type: "group",
        label: label === undefined ? false : label,
        ...fieldBaseProps(rest),
    };
};
exports.groupField = groupField;
const rowField = (props) => ({
    type: "row",
    ...fieldBaseProps(props),
});
exports.rowField = rowField;
const arrayField = (props) => {
    const { rowLabel, ...rest } = props;
    const interfaceName = props.interfaceName || props.name;
    return (0, deep_1.deepMerge)({
        type: "array",
        ...fieldBaseProps(rest),
        interfaceName: `${interfaceName}Array`,
        admin: {
            initCollapsed: true,
            components: {
                RowLabel: rowLabel,
            },
        },
    }, { admin: props.admin ?? {} });
};
exports.arrayField = arrayField;
const uploadField = (props) => {
    return {
        type: "upload",
        ...fieldBaseProps(props),
    };
};
exports.uploadField = uploadField;
const tabsField = (props) => {
    return {
        type: "tabs",
        ...props,
    };
};
exports.tabsField = tabsField;
const tabField = (props) => {
    return {
        ...props,
    };
};
exports.tabField = tabField;
const blockField = (props) => ({
    type: "blocks",
    ...props,
});
exports.blockField = blockField;
const relationshipField = (props) => {
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
exports.relationshipField = relationshipField;
function isSingleRelationshipField(props) {
    return props.hasMany === false;
}
function isPolymorphicRelationshipField(props) {
    return props.hasMany === true;
}
const collapsibleField = (props) => {
    return {
        type: "collapsible",
        ...props,
        admin: {
            initCollapsed: true,
            ...props.admin,
        },
    };
};
exports.collapsibleField = collapsibleField;
const jsonField = (props) => {
    return {
        type: "json",
        ...fieldBaseProps(props),
    };
};
exports.jsonField = jsonField;
const dateField = (props) => {
    return {
        type: "date",
        ...fieldBaseProps(props),
    };
};
exports.dateField = dateField;
const emailField = (props) => {
    return {
        type: "email",
        ...fieldBaseProps(props),
    };
};
exports.emailField = emailField;
const pointField = (props) => {
    return {
        type: "point",
        ...fieldBaseProps(props),
    };
};
exports.pointField = pointField;
