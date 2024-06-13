const express = require("express");
const { path } = require("./module_assemble.js");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send(path);
});
app.listen(port, () => console.log(`http://localhost:${port}`));
