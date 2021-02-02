const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(port, () => {
  console.log("listen");
});
