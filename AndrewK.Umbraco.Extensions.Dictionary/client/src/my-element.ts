import {
  LitElement,
  html,
  customElement,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import {
  UmbNotificationContext,
  UMB_NOTIFICATION_CONTEXT,
} from "@umbraco-cms/backoffice/notification";

@customElement('my-typescript-element')
export default class MyTypeScriptElement extends UmbElementMixin(LitElement) {
  #notificationContext?: UmbNotificationContext;

  constructor() {
    super();
    this.consumeContext(UMB_NOTIFICATION_CONTEXT, (_instance) => {
      this.#notificationContext = _instance;
    });
  }

  #onClick = () => {
    this.#notificationContext?.peek("positive", {
      data: { message: "#h5yr" },
    });
  };

  render() {
    return html`
            <uui-box headline="Welcome">
                <p>A TypeScript Lit Dashboard</p>
                <uui-button
                    look="primary"
                    label="Click me"
                    @click=${this.#onClick}
                ></uui-button>
            </uui-box>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-typescript-element': MyTypeScriptElement;
  }
}
