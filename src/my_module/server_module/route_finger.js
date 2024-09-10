const express = require("express");

module.exports = function () {
  const router = express.Router();
  let fingerEventOccurred = false;

  router.post("/", (req, res) => {
    const { event, effect } = req.body;
    console.log("finger 이벤트 요청 수신:", event, effect);

    if (event === "finger") {
      fingerEventOccurred = true;
      res.json({ success: true, message: "finger" });
    } else {
      res.json({ success: false, message: "finger event 실패" });
    }
  });

  router.get("/check-finger-event", (req, res) => {
    res.json({ fingerEventOccurred });
  });

  return router;
};
