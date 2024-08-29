import express from "express";
import { Database } from "sqlite3";
import m from "../../module_assemble.js";
const insertDb = require("./src/my_module/db_module/insertDb.js");

interface Result {
  hpointAll: number;
  ypointAll: number;
}

interface Row {
  totalHpoint: number;
  totalYpoint: number;
  rowCount?: number;
}

export default function (db: Database, result: Result) {
  const router = express.Router();

  /**
   * POST 요청으로 급식 메뉴를 선택하고 데이터베이스에 저장한 후, 결과를 처리함
   *
   * @name post/cafe
   * @memberof module:router
   * @param {Object} req - 요청 객체
   * @param {Object} res - 응답 객체
   */
  router.post("/cafe", async (req, res) => {
    const parsedData = req.body;
    console.log("선택한 메뉴 : ", parsedData);

    try {
      // 선택한 메뉴를 'active' 테이블에 저장함
      await insertDb(db, "active", parsedData[0], parsedData[1], parsedData[2]);

      // 'active' 테이블에 있는 데이터를 기준으로 총 hpoint와 ypoint를 계산함
      const selectQuery = `
        SELECT SUM(b.hpoint) AS totalHpoint, SUM(b.ypoint) AS totalYpoint 
        FROM base AS b
        JOIN (
          SELECT nameOne AS name FROM active
          UNION
          SELECT nameTwo AS name FROM active
          UNION
          SELECT nameThree AS name FROM active
        ) AS a
        ON b.name = a.name
      `;

      // 쿼리 결과를 가져와서 총 hpoint와 ypoint를 업데이트함
      db.get(selectQuery, async (err: Error | null, row: Row) => {
        if (err) {
          throw err;
        }

        result.hpointAll = row.totalHpoint;
        result.ypointAll = row.totalYpoint;
        console.log(result);

        // 'active' 테이블의 총 행 수를 가져와서 현재 턴을 계산함
        db.get(
          `SELECT COUNT(*) AS rowCount FROM active`,
          async (err: Error | null, row: Row) => {
            if (err) {
              throw err;
            }

            // row.rowCount가 undefined일 경우 0을 기본값으로 설정함
            // 쿼리 결과로 얻은 'active' 테이블의 행 수(rowCount)를 currentTurn에 저장함
            const currentTurn = row.rowCount || 0;

            // 'sum' 테이블에 총 hpoint, ypoint, 그리고 currentTurn 값을 저장함
            await insertDb(
              db, // 데이터베이스 인스턴스
              "sum", // 데이터를 삽입할 테이블 이름
              result.hpointAll, // 총 hpoint 값
              result.ypointAll, // 총 ypoint 값
              currentTurn // 계산된 현재 턴(즉, 'active' 테이블의 총 행 수)
            );
          }
        );

        // 총 hpoint가 5 이상이면 'cafe1' 컴포넌트를, 그렇지 않으면 'cafe0' 컴포넌트를 반환함
        if (result.hpointAll >= 5) {
          res.send(m.componentAssemble.cafe1);
        } else {
          res.send(m.componentAssemble.cafe0);
        }
      });
    } catch (error) {
      console.error("오류 발생:", error);
      const responseData = { success: false, message: "Data processing error" };
      res.status(500).json(responseData);
    }
  });

  return router;
}
