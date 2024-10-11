"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBlockHelper = exports.useBlocks = void 0;
const useBlocks = (config) => {
    const helper = (0, exports.useBlockHelper)({
        config,
    });
    return helper;
};
exports.useBlocks = useBlocks;
const useBlockHelper = (props) => {
    const { config } = props;
    let blockKeys = Object.keys(config).filter((b) => {
        const blockSettings = config[b];
        if (typeof blockSettings === "boolean" && blockSettings === false) {
            return false;
        }
        return true;
    });
    const exclude = (...blocks) => {
        // Filter out block keys that are included in the blocks parameter
        blockKeys = blockKeys.filter((key) => !blocks.includes(key));
        return builder;
    };
    const filter = (predicate) => {
        blockKeys = blockKeys.filter(predicate);
    };
    const only = (...blocks) => {
        // Filter out block keys that are not included in the blocks parameter
        blockKeys = blockKeys.filter((key) => blocks.includes(key));
        return builder;
    };
    const build = (params) => {
        const blocks = blockKeys.map((key) => {
            const block = config[key];
            if (!block) {
                console.error(`Block ${key} not found in blockMap`);
                return null;
            }
            return block(params);
        });
        return blocks.filter((b) => b !== null);
    };
    const builder = {
        filter,
        exclude,
        build,
        only,
    };
    return builder;
};
exports.useBlockHelper = useBlockHelper;
