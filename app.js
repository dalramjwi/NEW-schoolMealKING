const express = require("express");
const modules = require("./module_assemble.js");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.sendFile(modules.path).join(__dirname, "./public/main.html");
});
app.listen(port, () => console.log(`http://localhost:${port}`));
