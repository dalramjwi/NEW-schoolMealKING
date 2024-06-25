const express = require("express");
const m = require("./src/module_assemble.js");
const app = express();
const port = process.env.PORT || 3000;
app.use("/public", express.static("public"));
app.use(express.json());
app.get("/", function (req, res) {
  res.send(m.componentAssemble.main);
});
app.post("/menu", function (req, res) {
  res.send(m.componentAssemble.menu);
});
app.post("/cafe", function (req, res) {
  const parsedData = req.body;
  console.log("Received data:", parsedData);

  const responseData = { message: "Data received successfully" };
  res.status(200).json(responseData);
});
app.use(function (err, req, res, next) {
  res.send("Error EXist");
});
app.listen(port, () => console.log(`http://localhost:${port}`));
