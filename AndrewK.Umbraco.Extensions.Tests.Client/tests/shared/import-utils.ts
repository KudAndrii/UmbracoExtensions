// @ts-ignore
import type { UmbPropertyEditorUiElement } from '@umbraco-cms/backoffice/dist-cms/packages/core/property-editor'
// @ts-ignore
import type { UUIFormControlMixinElement } from '@umbraco-cms/backoffice/dist-cms/external/uui'

// @ts-ignore
export type { UmbPropertyEditorConfigCollection } from '@umbraco-cms/backoffice/dist-cms/packages/core/property-editor'
export type { KeyValuePair } from '../../../AndrewK.Umbraco.Extensions.Dictionary/client/src/types'

export type CustomElement<TElement, TValue> = TElement & UUIFormControlMixinElement<TValue>
export type CustomPropertyEditorElement<TElement, TValue> = CustomElement<TElement, TValue> & UmbPropertyEditorUiElement