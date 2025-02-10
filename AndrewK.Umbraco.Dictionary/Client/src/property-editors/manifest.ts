export const manifests: Array<UmbExtensionManifest> = [
    {
        type: 'propertyEditorUi',
        alias: 'AndrewK.Umbraco.Dictionary',
        name: 'AndrewK Dictionary',
        js: () => import('./property-editor-ui-multiple-key-value-pair.element.ts'),
        meta: {
            label: 'Dictionary',
            icon: 'icon-ordered-list',
            group: 'common',
            propertyEditorSchemaAlias: 'Umbraco.Plain.Json',
            settings: {
                properties: [
                    {
                        alias: 'min',
                        label: 'Minimum',
                        description: 'Enter the minimum amount of text boxes to be displayed',
                        propertyEditorUiAlias: 'Umb.PropertyEditorUi.Integer'
                    },
                    {
                        alias: 'max',
                        label: 'Maximum',
                        description: 'Enter the maximum amount of text boxes to be displayed, enter 0 for unlimited',
                        propertyEditorUiAlias: 'Umb.PropertyEditorUi.Integer'
                    },
                ]
            },
        },
    }
];
