"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGlobalConfig = void 0;
const createGlobalConfig = (props) => {
    return {
        ...props,
        access: {
            read: () => true,
        },
    };
};
exports.createGlobalConfig = createGlobalConfig;
