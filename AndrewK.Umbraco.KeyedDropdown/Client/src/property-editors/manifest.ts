export const manifests: Array<UmbExtensionManifest> = [
    {
        type: 'propertyEditorUi',
        alias: 'AndrewK.Umbraco.KeyedDropdown',
        name: 'AndrewK KeyedDropdown',
        js: () => import('./keyed-dropdown.ts'),
        // element: '/App_Plugins/Suggestions/dist/keyed-dropdown.js',
        // elementName: 'AndrewK-umbraco-keyedDropdown',
        meta: {
            label: 'KeyedDropdown',
            icon: 'icon-list',
            group: 'common',
            propertyEditorSchemaAlias: 'Umbraco.Plain.String',
            settings: {
                properties: [
                    {
                        alias: 'multiple',
                        label: 'Enable multiple choice',
                        propertyEditorUiAlias: 'Umb.PropertyEditorUi.Toggle'
                    },
                    {
                        alias: 'items',
                        label: 'Add keyed options',
                        propertyEditorUiAlias: 'AndrewK.Umbraco.Dictionary'
                    }
                ]
            }
        }
    },
    {
        type: 'propertyEditorUi',
        alias: 'AndrewK.Umbraco.Dictionary',
        name: 'AndrewK Dictionary',
        js: () => import('./dictionary.ts'),
        meta: {
            label: 'Dictionary',
            icon: 'icon-ordered-list',
            group: 'common',
            propertyEditorSchemaAlias: 'Umbraco.MultipleTextstring',
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
                ],
                // defaultData: [
                //     {alias: 'min', value: 0},
                //     {alias: 'max', value: 0},
                // ],
            },
        },
    },
    // {
    //     type: 'propertyEditorUi',
    //     alias: 'AndrewK.Umbraco.Dictionary',
    //     name: 'AndrewK Dictionary',
    //     js: () => import('./dictionary.ts'),
    // }
];
