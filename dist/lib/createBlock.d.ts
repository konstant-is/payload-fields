import { Block } from "payload/types";
type Props<P = unknown> = P;
type BlockCreationFunction = <P>(props: Props<P>) => Block;
export declare const createBlock: (blockCreationFunction: BlockCreationFunction) => (props: Props) => Block;
export {};
//# sourceMappingURL=createBlock.d.ts.map