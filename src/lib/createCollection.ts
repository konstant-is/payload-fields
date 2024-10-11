import { CollectionConfig } from "payload/types";

export const createCollection = (props: CollectionConfig): CollectionConfig => {
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
