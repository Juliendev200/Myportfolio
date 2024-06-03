import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/Myportfolio" : "/",
  plugins: [react(), svgr()],
});
