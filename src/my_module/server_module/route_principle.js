const express = require("express");

module.exports = function () {
  const router = express.Router();
  let principleEventOccurred = false;

  router.post("/", (req, res) => {
    const { event, effect } = req.body;
    console.log("교장 선생님 이벤트 - event:", event);
    console.log("교장 선생님 이벤트 - effect:", effect);

    if (event === "principle") {
      principleEventOccurred = true;
      console.log("Principle Event:", principleEventOccurred);
    }

    res.json({ message: "교장 선생님 이벤트 처리 완료" });
  });

  return router;
};
