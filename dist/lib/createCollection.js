"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCollection = void 0;
const createCollection = (props) => {
    return {
        ...props,
        slug: props.slug,
        fields: props.fields,
        access: {
            read: () => true,
            ...props.access,
        },
    };
};
exports.createCollection = createCollection;
