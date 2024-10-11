import { GlobalConfig } from "payload/types";

export const createGlobalConfig = (props: GlobalConfig): GlobalConfig => {
  return {
    ...props,
    access: {
      read: () => true,
    },
  };
};
