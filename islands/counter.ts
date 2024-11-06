
import { LitElement, html, css } from "lit";

export class Counter extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  static properties = {
    name: {},
    count: { type: Number },
  };

  constructor() {
    super();
    this.name = "Somebody";
    this.count = 0;
  }

  render() {
    return html`
      <div class="p-4 border-solid border-2 border-lime-600 rounded-md">
        <h2 class="pb-4">
          Hello,
          <span class="bg-lime-400 px-2 py-1 rounded-md">${this.name}</span>
        </h2>
        <section class="flex justify-center items-center">
          <button
            type="button"
            class="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click=${() => this.count--}
          >
            -
          </button>
          <p class="px-2">Count: ${this.count}</p>

          <button
            type="button"
            class="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click=${() => this.count++}
          >
            +
          </button>
        </section>
      </div>
    `;
  }
}

customElements.define("island-counter", Counter);
