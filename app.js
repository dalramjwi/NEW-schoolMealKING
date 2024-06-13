const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send();
});
app.listen(port, () => console.log(`http://localhost:${port}`));
