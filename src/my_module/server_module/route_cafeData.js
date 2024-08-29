/**
 * 이 파일은 Express 라우터를 정의하여 '/cafeData' 엔드포인트에 대한 GET 요청을 처리하고,
 * SQLite3 데이터베이스에서 가장 최근의 데이터를 조회하여 클라이언트에게 반환하는 역할을 한다.
 * 데이터베이스와의 상호작용을 통해 급식 메뉴와 관련된 정보를 제공하며, 현재 턴의 정보를 함께 반환한다.
 */

const express = require("express");

module.exports = function (db) {
  const router = express.Router();

  /**
   * GET 요청으로 '/cafeData' 엔드포인트에 대해 데이터베이스에서 최근 데이터를 조회한 후, 결과를 반환함
   *
   * @name get/cafeData
   * @memberof module:router
   * @param {Object} req - 요청 객체
   * @param {Object} res - 응답 객체
   */
  router.get("/cafeData", (req, res) => {
    // 'active' 테이블에서 최근에 삽입된 데이터를 조회하는 쿼리
    const query = `
      SELECT nameOne, nameTwo, nameThree
      FROM active
      ORDER BY ROWID DESC
      LIMIT 1
    `;

    // 데이터베이스 쿼리 실행
    db.get(query, (err, row) => {
      if (err) {
        console.error("쿼리 실행 오류:", err);
        res.status(500).json({ success: false, message: "Query error" });
        return;
      }

      // 'active' 테이블의 총 행 수를 조회하는 쿼리
      db.get(`SELECT COUNT(*) AS rowCount FROM active`, (err, rowCountRow) => {
        if (err) {
          console.error("쿼리 실행 오류:", err);
          res.status(500).json({ success: false, message: "Query error" });
          return;
        }

        // 조회된 데이터와 현재 턴 정보를 함께 응답으로 반환
        const currentTurn = rowCountRow.rowCount;
        const data = { row: row, currentTurn: currentTurn };
        res.json(data);
      });
    });
  });

  return router;
};
