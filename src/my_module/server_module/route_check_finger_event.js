const express = require("express");
const { eventState } = require("./eventState.js");
module.exports = function () {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.setHeader("Cache-Control", "no-store");
    console.log("checkfingerevent", eventState);
    res.json({ fingerEventOccurred: eventState.fingerEventOccurred });
    console.log("checkfingerevent2", eventState);
  });

  return router;
};
