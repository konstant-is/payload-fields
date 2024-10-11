import { Block } from "payload/types";
type BlockConfig = Record<string, (props: unknown) => Block>;
type BlockKey = keyof BlockConfig;
export declare const useBlocks: (config: BlockConfig) => {
    filter: (predicate: (value: string, index: number) => boolean) => void;
    exclude: (...blocks: BlockKey[]) => any;
    build: (params?: unknown) => Block[];
    only: (...blocks: BlockKey[]) => any;
};
export declare const useBlockHelper: (props: {
    config: BlockConfig;
}) => {
    filter: (predicate: (value: string, index: number) => boolean) => void;
    exclude: (...blocks: BlockKey[]) => any;
    build: (params?: unknown) => Block[];
    only: (...blocks: BlockKey[]) => any;
};
export {};
//# sourceMappingURL=useBlocks.d.ts.map