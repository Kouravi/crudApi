const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to the project");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
