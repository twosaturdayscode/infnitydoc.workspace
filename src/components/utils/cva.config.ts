import { defineConfig } from "cva";
import { tm } from "./tm";

export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (className) => tm(className),
  },
});

export { type VariantProps } from "cva";
