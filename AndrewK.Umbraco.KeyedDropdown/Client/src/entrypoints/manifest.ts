export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Andrew KUmbraco Keyed Dropdown Entrypoint",
    alias: "AndrewK.Umbraco.KeyedDropdown.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint"),
  }
];
