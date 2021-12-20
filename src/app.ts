import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { startUnleash } from "../src/utils/featureToggle";
import { router } from "./router";

@customElement("app-root")
export class App extends LitElement {
  private routerRef: Ref<HTMLDivElement> = createRef();

  constructor() {
    super();

    startUnleash();
  }

  public firstUpdated() {
    const outletEl = this.routerRef.value;
    if (!outletEl) {
      return;
    }
    router.setOutlet(outletEl);
  }

  public render() {
    return html` <div ${ref(this.routerRef)}></div> `;
  }
}
