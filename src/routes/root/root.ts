import { Hono } from "hono";

const root = new Hono();

root.get("/", (c) => {
  return c.json({ success: true, message: "Hello Hono!" });
});

export default root;
