import "dotenv/config";
import { serve } from "@hono/node-server";
import { createApp } from "./app.js";

const app = createApp();
const envPort = process.env.PORT;
const port = Number(envPort ?? "4000");
const hostname = "127.0.0.1";

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error(`環境変数のPORTが不正な値(${envPort})です`);
  process.exit(1);
}

serve(
  {
    fetch: app.fetch,
    port,
    hostname,
  },
  (info) => {
    console.log(`Server is running on http://${hostname}:${info.port}`);
  },
);
