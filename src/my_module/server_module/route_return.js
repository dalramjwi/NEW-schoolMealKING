/**
 * 이 파일은 Express 라우터를 정의하여 '/return' 엔드포인트에 대한 POST 요청을 처리하는 역할을 합니다.
 * 클라이언트에서 전달된 키 값에 따라 특정 동작을 수행하며,
 * 데이터베이스와 상호작용하여 Hpoint를 계산하고 해당 결과에 따라 적절한 응답을 반환합니다.
 */

const express = require("express");
const m = require("../../module_assemble.js");

module.exports = function (db) {
  const router = express.Router();

  /**
   * POST 요청으로 전달된 키 값에 따라 특정 동작을 수행함
   *
   * @name post/return
   * @memberof module:router
   * @param {Object} req - 요청 객체
   * @param {Object} res - 응답 객체
   */
  router.post("/", (req, res) => {
    const { key } = req.body;
    console.log(key);

    // 'goToFirst' 키가 전달된 경우
    if (key === "repeat") {
      res.json({ success: true, message: "/menu로 연결" });

      // 'hpointCheck' 키가 전달된 경우
    } else if (key === "hpointCheck") {
      try {
        // 최근 3개의 hpointAll 값을 합산하여 총 hpoint를 계산하는 쿼리
        const query = `
          SELECT SUM(hpointAll) AS totalHpointAll 
          FROM (
            SELECT hpointAll 
            FROM sum 
            ORDER BY ROWID ASC 
            LIMIT 3
          )
        `;
        // 데이터베이스 쿼리 실행
        db.get(query, (err, row) => {
          if (err) {
            throw err;
          }

          // 쿼리 결과에서 총 hpointAll 값을 추출
          const totalHpointAll = row?.totalHpointAll ?? 0;
          console.log("총 HpointAll:", totalHpointAll);

          const hpoint = totalHpointAll >= 16;
          console.log("Hpoint가 16 이상인가?:", hpoint);

          // 총 hpoint가 16 이상인 경우와 아닌 경우에 따라 다른 컴포넌트를 반환
          if (hpoint) {
            res.send(m.componentAssemble.hpoinCheck1);
          } else {
            res.send(m.componentAssemble.hpoinCheck0);
          }
        });
      } catch (error) {
        console.error("오류 발생:", error);
        res
          .status(500)
          .json({ success: false, message: "Data processing error" });
      }

      // 'randomPage' 키가 전달된 경우 (추가적인 처리 로직이 필요)
    } else if (key === "randomPage") {
      // 랜덤 페이지 처리 로직 추가
      res.json({
        success: true,
        message: "Random page processing not implemented",
      });

      // 유효하지 않은 키가 전달된 경우
    } else {
      res.status(400).json({ success: false, message: "Invalid key" });
    }
  });

  return router;
};
