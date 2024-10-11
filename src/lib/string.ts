import slugifyDep from "slugify";

export const capitalize = (s: string | undefined | null): string =>
  (s?.length && s.charAt(0).toUpperCase() + s.slice(1)) || "";

export const slugify = (value: string = "") =>
  slugifyDep(value, {
    lower: true,
    trim: true,
  });
