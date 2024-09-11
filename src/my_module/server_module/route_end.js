const express = require("express");
const { eventState } = require("./eventState.js");
module.exports = function (db) {
  const router = express.Router();

  router.post("/", (req, res) => {
    // sum 테이블에서 모든 hpointAll과 ypointAll을 합산하여 hpointFinal과 ypointFinal을 계산
    db.get(
      "SELECT SUM(hpointAll) AS hpointFinal, SUM(ypointAll) AS ypointFinal FROM sum",
      (err, row) => {
        if (err) {
          console.error("Database query error:", err);
          return res.json({ success: false, message: "Database query error" });
        }

        // hpointFinal과 ypointFinal의 초기값 설정
        let hpointFinal = row.hpointFinal || 0;
        let ypointFinal = row.ypointFinal || 0;

        // 각 이벤트에 따라 포인트를 조정
        if (eventState.principleEventOccurred) {
          console.log("Principle Event 처리 중...");
          ypointFinal += 3; // ypointFinal에 +3
        }

        if (eventState.refrigeEventOccurred) {
          console.log("Refrige Event 처리 중...");
          hpointFinal -= 3; // hpointFinal에 -3
        }

        if (eventState.seasoningEventOccurred) {
          console.log("Seasoning Event 처리 중...");
          hpointFinal += 3; // hpointFinal에 +3
        }

        // 최종 결과를 클라이언트에 반환
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
