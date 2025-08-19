import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/property-editor-ui-ak-dictionary.element.ts", // your web component source file
            formats: ["es"],
        },
        //outDir: "../App_Plugins/client", // all compiled files will be placed here
        outDir: "../wwwroot",
        emptyOutDir: true,
        sourcemap: false,
        rollupOptions: {
            external: [/^@umbraco/], // ignore the Umbraco Backoffice package in the build
        },
    },
    base: "/App_Plugins/AndrewKDictionary/", // the base path of the app in the browser (used for assets)
});
