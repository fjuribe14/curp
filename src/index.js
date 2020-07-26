const express = require("express");
const path = require("path");
const morgan = require("morgan");

// init
const app = express();
require("./database/db");

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use(require("./routes/routes"));

// static
app.use(express.static(path.join(__dirname, "public")));

// server
async function server() {
  const port = app.get("port");
  await app.listen(port);
  console.log("server on port:", port);
}
server();
