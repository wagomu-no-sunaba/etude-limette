
import { LitElement, html } from "lit";
import type { AppTemplateOptions } from "@limette/core";

export default class App extends LitElement {
  render(app: AppTemplateOptions) {
    return html`<html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Limette</title>
        ${app.css}
      </head>
      <body>
        ${app.component}
        <!-- -->
        ${app.js}
      </body>
    </html>`;
  }
}
