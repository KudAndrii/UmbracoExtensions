export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Andrew KUmbraco Keyed Dropdown Dashboard",
    alias: "AndrewK.Umbraco.KeyedDropdown.Dashboard",
    type: 'dashboard',
    js: () => import("./dashboard.element"),
    meta: {
      label: "Example Dashboard",
      pathname: "example-dashboard"
    },
    conditions: [
      {
        alias: 'Umb.Condition.SectionAlias',
        match: 'Umb.Section.Content',
      }
    ],
  }
];
