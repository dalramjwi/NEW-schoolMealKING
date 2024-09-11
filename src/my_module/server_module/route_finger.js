const express = require("express");
const eventState = require("./eventState.js");
module.exports = function () {
  const router = express.Router();

  // finger 이벤트 처리
  router.post("/", (req, res) => {
    const { event, effect } = req.body;
    console.log("finger 이벤트 요청 수신:", event, effect);

    if (event === "finger") {
      eventState.fingerEventOccurred = true; // 이벤트 발생 시 상태 변경
      res.json({ success: true, message: "finger" });
    } else {
      res.json({ success: false, message: "unknown event" });
    }
  });

  router.get("/check-finger-event", (req, res) => {
    res.json({ fingerEventOccurred: eventState.fingerEventOccurred });
  });

  return router;
};
