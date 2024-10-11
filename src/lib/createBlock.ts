import { Block } from "payload/types";

type Props<P = unknown> = P;

type BlockCreationFunction = <P>(props: Props<P>) => Block;

export const createBlock = (blockCreationFunction: BlockCreationFunction) => {
  return (props: Props) => {
    const result = blockCreationFunction(props);
    return createBlockHelper(result);
  };
};

const createBlockHelper = (block: Block): Block => {
  return {
    ...block,
    interfaceName: block?.interfaceName || `${block?.slug}Block`,
  };
};
