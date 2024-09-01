import { join, dirname } from "path";
import { fileURLToPath } from "url";
import autoprefixer from "autoprefixer";
import nested from "postcss-nested";
import tailwind from "tailwindcss";
import postcssGlobalData from "@csstools/postcss-global-data";
import customMedia from "postcss-custom-media";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    postcssGlobalData({
      files: [join(__dirname, "src", "shared", "ui", "theme", "media.css")],
    }),
    autoprefixer,
    nested,
    tailwind,
    customMedia,
  ],
};

export default config;
