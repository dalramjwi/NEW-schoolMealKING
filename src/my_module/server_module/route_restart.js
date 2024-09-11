const express = require("express");
const { eventState, resetEventState } = require("./eventState");
module.exports = function (db) {
  const router = express.Router();

  router.post("/", (req, res) => {
    // 데이터베이스 연결이 열린 상태에서 테이블의 데이터 삭제
    db.serialize(() => {
      db.run("DELETE FROM active", (err) => {
        if (err) {
          console.error("active 테이블에서 데이터 삭제 오류:", err);
          return res.json({
            success: false,
            message: "active 테이블에서 데이터 삭제 실패",
          });
        }
        console.log("active 테이블에서 데이터 삭제됨");
      });

      db.run("DELETE FROM sum", (err) => {
        if (err) {
          console.error("sum 테이블에서 데이터 삭제 오류:", err);
          return res.json({
            success: false,
            message: "sum 테이블에서 데이터 삭제 실패",
          });
        }
        console.log("sum 테이블에서 데이터 삭제됨");
        // 상태 값 초기화
        resetEventState();
        console.log(resetEventState());
        console.log(eventState);
        // 모든 작업이 완료되었을 때 성공 응답을 보냅니다.
        res.json({
          success: true,
          message: "active 및 sum 테이블에서 데이터 삭제 완료",
        });
      });
    });
  });

  return router;
};
