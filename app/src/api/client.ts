import type { paths } from "@/api-types";
import type { Middleware } from "openapi-fetch";
import createClient from "openapi-fetch";

const myMiddleware: Middleware = {
  async onError({ error }) {
    throw new Error(`An error occurred: ${error}`);
  },
};

const client = createClient<paths>({ baseUrl: "http://localhost:3001" });

client.use(myMiddleware);

export { client };
