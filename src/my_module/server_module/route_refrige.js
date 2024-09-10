const express = require("express");

module.exports = function () {
  const router = express.Router();
  let refrigeEventOccurred = false;

  router.post("/", (req, res) => {
    const { event, effect } = req.body;
    console.log("냉장고 고장 이벤트 - event:", event);
    console.log("냉장고 고장 이벤트 - effect:", effect);

    if (event === "refrige") {
      refrigeEventOccurred = true;
      console.log("Refrige Event:", refrigeEventOccurred);
    }

    res.json({ message: "냉장고 고장 이벤트 처리 완료" });
  });

  return router;
};
