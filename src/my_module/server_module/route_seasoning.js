const express = require("express");
const eventState = require("./eventState.js");

module.exports = function () {
  const router = express.Router();

  router.post("/", (req, res) => {
    const { event, effect } = req.body;
    console.log("조미료 발견 이벤트 - event:", event);
    console.log("조미료 발견 이벤트 - effect:", effect);

    if (event === "seasoning") {
      eventState.seasoningEventOccurred = true;
      console.log("Seasoning Event:", eventState.seasoningEventOccurred);
    }

    res.json({ message: "조미료 발견 이벤트 처리 완료" });
  });
  return router;
};
