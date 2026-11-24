import { hc } from "hono/client";
import type { AppType } from "../../back/src/app";

export const client = hc<AppType>("/", {});
