import { join, dirname } from "path";
import { fileURLToPath } from "url";
import autoprefixer from "autoprefixer";
import nested from "postcss-nested";
import tailwind from "tailwindcss";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [autoprefixer, nested, tailwind],
};

export default config;
