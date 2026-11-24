import { Hono } from "hono";

export function createApp() {
  const app = new Hono().basePath("/api");

  return app.route("/health", createHealthApp());
}

function createHealthApp() {
  const app = new Hono();

  return app.get("/", (c) => {
    return c.json({
      status: "ok",
    });
  });
}

export type AppType = ReturnType<typeof createApp>;
