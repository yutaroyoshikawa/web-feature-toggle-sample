import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { getFeatureToggle } from "../../utils/featureToggle";

@customElement("debug-features")
export class PageTop extends LitElement {
  static styles = css`
    :host {
      color: red;
    }
    p {
      margin: 0;
    }
  `;

  private featureToggles = getFeatureToggle();

  public render() {
    return html`
      <h1>feature toggles</h1>
      <ul>
        ${repeat(
          this.featureToggles,
          (toggle) => toggle.name,
          (toggle) => html` <li>${toggle.name}</li> `
        )}
      </ul>
    `;
  }
}
