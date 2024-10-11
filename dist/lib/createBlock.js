"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlock = void 0;
const createBlock = (blockCreationFunction) => {
    return (props) => {
        const result = blockCreationFunction(props);
        return createBlockHelper(result);
    };
};
exports.createBlock = createBlock;
const createBlockHelper = (block) => {
    return {
        ...block,
        interfaceName: block?.interfaceName || `${block?.slug}Block`,
    };
};
