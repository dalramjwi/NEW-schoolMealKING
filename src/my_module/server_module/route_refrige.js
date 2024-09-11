const express = require("express");
const eventState = require("./eventState.js");

module.exports = function () {
  const router = express.Router();

  router.post("/", (req, res) => {
    const { event, effect } = req.body;
    console.log("냉장고 고장 이벤트 - event:", event);
    console.log("냉장고 고장 이벤트 - effect:", effect);

    if (event === "refrige") {
      eventState.refrigeEventOccurred = true;
      console.log("Refrige Event:", eventState.refrigeEventOccurred);
    }

    res.json({ message: "냉장고 고장 이벤트 처리 완료" });
  });

  return router;
};
