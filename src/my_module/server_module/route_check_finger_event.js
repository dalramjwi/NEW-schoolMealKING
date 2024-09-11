const express = require("express");
const eventState = require("./eventState.js");
module.exports = function () {
  const router = express.Router();

  router.get("/", (req, res) => {
    console.log(eventState.fingerEventOccurred);
    res.json({ fingerEventOccurred: eventState.fingerEventOccurred });
  });
  console.log(eventState.fingerEventOccurred);

  return router;
};
