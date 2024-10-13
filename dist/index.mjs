// src/lib/deep.ts
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

// src/lib/string.ts
import slugifyDep from "slugify";
var capitalize = (s) => s?.length && s.charAt(0).toUpperCase() + s.slice(1) || "";
var slugify = (value = "") => slugifyDep(value, {
  lower: true,
  trim: true
});

// src/fields/fields.ts
var fieldBaseProps = (props) => ({
  required: true,
  localized: true,
  ...props
});
var field = (props) => ({ ...props });
var textField = (props) => {
  const type = "text";
  const fieldLabel = props.label ?? capitalize(props.name);
  if (props.hasMany) {
    return {
      type,
      ...fieldBaseProps(props),
      label: fieldLabel,
      hasMany: true
    };
  }
  return {
    type,
    ...fieldBaseProps(props),
    label: fieldLabel,
    hasMany: false,
    maxRows: void 0,
    minRows: void 0
  };
};
var numberField = (props) => {
  if (props.hasMany) {
    return {
      type: "number",
      ...fieldBaseProps(props),
      hasMany: true
    };
  }
  return {
    type: "number",
    ...fieldBaseProps(props),
    hasMany: false,
    maxRows: void 0,
    minRows: void 0
  };
};
var textAreaField = (props) => {
  return {
    type: "textarea",
    ...fieldBaseProps(props)
  };
};
var richTextField = (props) => ({
  type: "richText",
  ...fieldBaseProps(props)
});
var selectField = (props) => {
  return {
    type: "select",
    ...fieldBaseProps(props)
  };
};
var checkboxField = (props) => ({
  type: "checkbox",
  ...fieldBaseProps(props)
});
var radioField = (props) => {
  return {
    type: "radio",
    ...fieldBaseProps(props)
  };
};
var groupField = (props) => {
  const { label, ...rest } = props;
  return {
    type: "group",
    label: label === void 0 ? false : label,
    ...fieldBaseProps(rest)
  };
};
var rowField = (props) => ({
  type: "row",
  ...fieldBaseProps(props)
});
var arrayField = (props) => {
  const { rowLabel, ...rest } = props;
  const interfaceName = props.interfaceName || props.name;
  return deepMerge(
    {
      type: "array",
      ...fieldBaseProps(rest),
      interfaceName: `${interfaceName}Array`,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: rowLabel
        }
      }
    },
    { admin: props.admin ?? {} }
  );
};
var uploadField = (props) => {
  return {
    type: "upload",
    ...fieldBaseProps(props)
  };
};
var tabsField = (props) => {
  return {
    type: "tabs",
    ...props
  };
};
var tabField = (props) => {
  return {
    ...props
  };
};
var blockField = (props) => ({
  type: "blocks",
  ...props
});
var relationshipField = (props) => {
  if (isPolymorphicRelationshipField(props)) {
    return {
      ...fieldBaseProps(props),
      type: "relationship",
      hasMany: true
    };
  }
  return {
    type: "relationship",
    ...fieldBaseProps(props),
    hasMany: false,
    max: void 0,
    maxRows: void 0,
    min: void 0,
    minRows: void 0
  };
};
function isPolymorphicRelationshipField(props) {
  return props.hasMany === true;
}
var collapsibleField = (props) => {
  return {
    type: "collapsible",
    ...props,
    admin: {
      initCollapsed: true,
      ...props.admin
    }
  };
};
var jsonField = (props) => {
  return {
    type: "json",
    ...fieldBaseProps(props)
  };
};
var dateField = (props) => {
  return {
    type: "date",
    ...fieldBaseProps(props)
  };
};
var emailField = (props) => {
  return {
    type: "email",
    ...fieldBaseProps(props)
  };
};
var pointField = (props) => {
  return {
    type: "point",
    ...fieldBaseProps(props)
  };
};

// src/fields/fields-common.ts
var createTextField = (name, props) => {
  const field2 = textField({
    name: props?.name ?? name,
    label: props?.label ?? capitalize(name),
    required: props?.required,
    admin: {
      condition: props?.condition,
      description: props?.description
    }
  });
  return deepMerge(field2, props?.overrides || {});
};
var createTextAreaField = (name, props) => {
  const field2 = textAreaField({
    name: props?.name ?? name,
    label: props?.label ?? capitalize(name),
    required: props?.required,
    admin: {
      condition: props?.condition,
      description: props?.description
    }
  });
  return deepMerge(field2, props?.overrides || {});
};
var titleField = (props) => {
  return createTextField("title", props);
};
var subtitleField = (props) => {
  return createTextField("subtitle", props);
};
var nameField = (props) => {
  return createTextField("name", props);
};
var labelField = (props) => {
  return createTextField("label", props);
};
var descriptionField = (props) => {
  return createTextAreaField("description", props);
};
var sidebarFields = (props) => {
  return props.fields.map((field2) => {
    return deepMerge(field2, {
      admin: {
        position: "sidebar"
      }
    });
  });
};

// src/fields/slug.ts
var slugField = (props) => {
  const name = props?.name ?? "slug";
  const fieldToUse = props?.fieldToUse ?? "title";
  const field2 = textField({
    name,
    label: props?.label ?? capitalize(name),
    admin: {
      position: "sidebar",
      readOnly: props?.readonly
    },
    hooks: {
      beforeValidate: [formatHook(fieldToUse)]
    },
    index: true,
    ...props
  });
  return field2;
};
var formatHook = (fallback) => ({ data, operation, originalDoc, value }) => {
  const fallbackData = data?.[fallback] || originalDoc?.[fallback];
  if (typeof value === "string" && value === fallbackData) {
    return slugify(value);
  }
  if (operation === "update") {
    if (fallbackData && typeof fallbackData === "string") {
      return slugify(fallbackData);
    }
  }
  if (operation === "create") {
    if (fallbackData && typeof fallbackData === "string") {
      return slugify(fallbackData);
    }
  }
  return value;
};

// src/lib/createBlock.ts
var createBlock = (blockCreationFunction) => {
  return (props) => {
    const result = blockCreationFunction(props);
    return createBlockHelper(result);
  };
};
var createBlockHelper = (block) => {
  return {
    ...block,
    interfaceName: block?.interfaceName || `${block?.slug}Block`
  };
};

// src/lib/createCollection.ts
var createCollection = (props) => {
  return {
    ...props,
    slug: props.slug,
    fields: props.fields,
    access: {
      read: () => true,
      ...props.access
    }
  };
};

// src/lib/createGlobal.ts
var createGlobalConfig = (props) => {
  return {
    ...props,
    access: {
      read: () => true
    }
  };
};

// src/lib/useBlocks.ts
var useBlocks = (config) => {
  const helper = useBlockHelper({
    config
  });
  return helper;
};
var useBlockHelper = (props) => {
  const { config } = props;
  let blockKeys = Object.keys(config).filter((b) => {
    const blockSettings = config[b];
    if (typeof blockSettings === "boolean" && blockSettings === false) {
      return false;
    }
    return true;
  });
  const exclude = (...blocks) => {
    blockKeys = blockKeys.filter((key) => !blocks.includes(key));
    return builder;
  };
  const filter = (predicate) => {
    blockKeys = blockKeys.filter(predicate);
  };
  const only = (...blocks) => {
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
    only
  };
  return builder;
};
export {
  arrayField,
  blockField,
  checkboxField,
  collapsibleField,
  createBlock,
  createCollection,
  createGlobalConfig,
  dateField,
  deepMerge,
  descriptionField,
  emailField,
  field,
  formatHook,
  groupField,
  isObject,
  jsonField,
  labelField,
  nameField,
  numberField,
  pointField,
  radioField,
  relationshipField,
  richTextField,
  rowField,
  selectField,
  sidebarFields,
  slugField,
  subtitleField,
  tabField,
  tabsField,
  textAreaField,
  textField,
  titleField,
  uploadField,
  useBlockHelper,
  useBlocks
};
//# sourceMappingURL=index.mjs.map