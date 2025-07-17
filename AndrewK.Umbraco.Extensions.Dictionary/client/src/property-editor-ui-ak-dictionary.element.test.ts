import { AkPropertyEditorUIDictionaryElement } from './property-editor-ui-ak-dictionary.element.ts'
import { expect, fixture, html } from '@open-wc/testing'

describe('AkPropertyEditorUIDictionaryElement', () => {
    let element: AkPropertyEditorUIDictionaryElement;

    beforeEach(async () => {
        element = await fixture(html`
          <ak-property-editor-ui-dictionary></ak-property-editor-ui-dictionary>
        `);
    });

    it('should render without errors', () => {
        expect(element.shadowRoot).to.exist;
    });

    it('can be created with its own instance', () => {
        expect(element).to.exist;
        expect(element).to.be.instanceOf(AkPropertyEditorUIDictionaryElement);
    });

    // it('should handle config changes', async () => {
    //     const mockConfig = {
    //         getValueByAlias: (alias: string) => {
    //             if (alias === 'items') return [{ key: 'key1', value: 'value1' }];
    //             if (alias === 'default') return '';
    //             return undefined;
    //         }
    //     };
    //
    //     element.config = mockConfig;
    //     await element.updateComplete;
    //
    //     expect(element).to.exist;
    // });

    // it('should dispatch change events', async () => {
    //     let changeEventFired = false;
    //     element.addEventListener('change', () => {
    //         changeEventFired = true;
    //     });
    //
    //     // Simulate a change
    //     element.value = 'test-value';
    //     element.dispatchEvent(new UmbChangeEvent());
    //
    //     expect(changeEventFired).to.be.true;
    // });

    // it('should handle readonly state', async () => {
    //     element.readonly = true;
    //     await element.updateComplete;
    //
    //     expect(element.readonly).to.be.true;
    // });

    // it('should handle mandatory validation', async () => {
    //     element.mandatory = true;
    //     await element.updateComplete;
    //
    //     expect(element.mandatory).to.be.true;
    // });
});