import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-top")
export class PageTop extends LitElement {
  static styles = css`
    :host {
      color: red;
    }
    p {
      margin: 0;
    }
  `;

  public render() {
    return html`
      <h1>page top</h1>
      <a href="/_debug/features">featureToggles</a>
    `;
  }
}
