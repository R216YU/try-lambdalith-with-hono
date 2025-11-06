import { Hono } from "hono";
import { getEriFeeling } from "../../utils/eri";

const eri = new Hono();

eri.get("/", (c) => {
  return c.json({ success: true, message: "Hello from Eri!" });
});

eri.get("/feeling", (c) => {
  try {
    const feeling = getEriFeeling();
    return c.json({ success: true, message: feeling });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    c.status(500);
    return c.json({ success: false, message });
  }
});

eri.post("/calculate", async (c) => {
  const body = await c.req.json();
  const { a, b } = body;
  const sum = a + b;
  return c.json({ success: true, result: sum });
});

export default eri;
