"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = exports.capitalize = void 0;
const slugify_1 = __importDefault(require("slugify"));
const capitalize = (s) => (s?.length && s.charAt(0).toUpperCase() + s.slice(1)) || "";
exports.capitalize = capitalize;
const slugify = (value = "") => (0, slugify_1.default)(value, {
    lower: true,
    trim: true,
});
exports.slugify = slugify;
