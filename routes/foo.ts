
import { LitElement, html } from "lit";
import type { Handlers } from "@limette/core";

export const handler: Handlers = {
  POST(_ctx) {
    return new Response(`Response for POST request!`);
  },
};

export default class Foo extends LitElement {
  render() {
    return html`
      <lmt-head>
        <title>Foo</title>
      </lmt-head>
      <section class="flex items-center flex-col text-center pt-8">
        <h1 class="text-3xl font-bold text-lime-600 pb-4">Limette</h1>
        <div class="max-w-screen-sm">
          <p class="pb-6">Foo page.</p>
          <section>
            <a href="/" class="text-indigo-600 underline">To home</a>
          </section>
        </div>
      </section>
    `;
  }
}
