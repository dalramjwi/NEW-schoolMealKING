const express = require("express");
const m = require("./src/module_assemble.js");
const app = express();
const port = process.env.PORT || 3000;
app.use("/public", express.static("public"));
app.get("/", function (req, res) {
  res.send(m.componentAssemble.menu);
});
app.use(function (err, req, res, next) {
  res.send("Error EXist");
});
app.listen(port, () => console.log(`http://localhost:${port}`));
