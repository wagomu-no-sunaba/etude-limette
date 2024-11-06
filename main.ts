
import { LimetteApp } from "@limette/core";

export const app = new LimetteApp();

app.setLoadFs((path: string) => import(`./${path}`));

if (import.meta.main) {
  app.listen({ port: 8000 });
}
