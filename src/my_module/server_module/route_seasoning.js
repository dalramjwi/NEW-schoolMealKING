const express = require("express");

module.exports = function () {
  const router = express.Router();
  let seasoningEventOccurred = false;

  router.post("/", (req, res) => {
    const { event, effect } = req.body;
    console.log("조미료 발견 이벤트 - event:", event);
    console.log("조미료 발견 이벤트 - effect:", effect);

    if (event === "seasoning") {
      seasoningEventOccurred = true;
      console.log("Seasoning Event:", seasoningEventOccurred);
    }

    res.json({ message: "조미료 발견 이벤트 처리 완료" });
  });

  return router;
};
