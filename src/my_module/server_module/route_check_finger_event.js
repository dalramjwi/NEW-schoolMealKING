const express = require("express");
const eventState = require("./eventState.js");
module.exports = function () {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json({ fingerEventOccurred: eventState.fingerEventOccurred });
  });

  return router;
};
