
import { LitElement, html } from "lit";
import "../islands/counter.ts";

export default class Home extends LitElement {
  render() {
    return html`
      <section class="flex items-center flex-col text-center pt-8">
        <h1 class="text-3xl font-bold text-lime-600 pb-4">Limette</h1>
        <div class="max-w-screen-sm">
          <p class="pb-6">This is SSR content.</p>
          <is-land><island-counter name="Iris"></island-counter></is-land>

          <section class="pt-5">
            <a href="/foo" class="text-indigo-600 underline">To foo</a>
          </section>
        </div>
      </section>
    `;
  }
}
