import { defineConfig } from "vite";
import { minifyHtml } from "vite-plugin-html";

export default defineConfig({
  plugins: [minifyHtml()],
});
