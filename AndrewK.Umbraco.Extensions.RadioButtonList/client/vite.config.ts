import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/property-editor-ui-ak-radio-button-list.element.ts", // your web component source file
            formats: ["es"],
        },
        outDir: "../wwwroot",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/], // ignore the Umbraco Backoffice package in the build
        },
    },
    base: "/App_Plugins/AndrewKRadioButtonList/", // the base path of the app in the browser (used for assets)
});
