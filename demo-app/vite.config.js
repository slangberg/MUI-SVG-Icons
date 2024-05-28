import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    root: "demo-app",
    base: "/MUI-SVG-Icons/",
    plugins: [react()],
    build: {
        outDir: "../docs"
    }
});
