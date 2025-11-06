import { Hono } from "hono";
import eri from "./routes/eri/eri";
import root from "./routes/root/root";

const app = new Hono();

app.route("/", root);
app.route("/eri", eri);

export default app;
