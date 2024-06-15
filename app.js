const express = require("express");
const m = require("./src/module_assemble.js");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send(m.componentAssemble.main);
});
app.use(function (err, req, res) {
  res.send("Error EXist");
});
app.listen(port, () => console.log(`http://localhost:${port}`));
