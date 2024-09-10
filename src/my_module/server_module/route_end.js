const express = require("express");

module.exports = function (db) {
  const router = express.Router();

  router.post("/", (req, res) => {
    db.get(
      "SELECT SUM(hpointAll) AS hpointFinal, SUM(ypointAll) AS ypointFinal FROM sum",
      (err, row) => {
        if (err) {
          console.error("Database query error:", err);
          return res.json({ success: false, message: "Database query error" });
        }

        let hpointFinal = row.hpointFinal || 0;
        let ypointFinal = row.ypointFinal || 0;

        if (principleEventOccurred) {
          console.log("Principle Event 처리 중...");
          ypointFinal += 3;
        }

        if (refrigeEventOccurred) {
          console.log("Refrige Event 처리 중...");
          hpointFinal -= 3;
        }

        if (seasoningEventOccurred) {
          console.log("Seasoning Event 처리 중...");
          hpointFinal += 3;
        }

        res.json({
          success: true,
          hpointFinal: hpointFinal,
          ypointFinal: ypointFinal,
          message: "점수 계산 완료",
        });
      }
    );
  });

  return router;
};
