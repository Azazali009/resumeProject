import express from "express";
import { join } from "path";

const app = express();
const port = process.env.PORT || 3000;

import main from "./routes/main.js";

// set static files

app.use(express.static(join(process.cwd(), "public")));

// setup template engine files
app.set("view engine", "ejs");

// load routes
app.use("/", main);

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
