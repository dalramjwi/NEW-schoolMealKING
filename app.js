const express = require("express");
const m = require("./src/module_assemble.js");
const database = require("sqlite3").verbose();
const createDb = require("./src/my_module/db_module/createDb.js");
const insertDb = require("./src/my_module/db_module/insertDb.js");
const work = require("./database.js");
// 데이터베이스 연결
const db = new database.Database(`./database/school.db`, (err) => {
  if (err) {
    console.log("에러 발생 : ", err);
  }
});
const app = express();
const port = process.env.PORT || 3000;
const activeCreate = createDb(db, "active", "nameOne", "nameTwo", "nameThree");

// 빈 객체 `result` 정의
let result = { hpointAll: 0, ypointAll: 0 };
work();
await activeCreate;
app.use("/public", express.static("public"));
app.use(express.json());
app.get("/", function (req, res) {
  res.send(m.componentAssemble.main);
});
// 새로운 GET 요청 핸들러 추가
app.get("/menu", function (req, res) {
  res.send(m.componentAssemble.menu);
});
app.post("/menu", function (req, res) {
  res.send(m.componentAssemble.menu);
});
app.post("/cafe", async function (req, res) {
  const parsedData = req.body;
  console.log("Received data:", parsedData);
  try {
    // `active` 테이블 생성

    // `active` 테이블에 데이터 삽입
    await insertDb(db, "active", parsedData[0], parsedData[1], parsedData[2]);

    // `base` 테이블에서 Hpoint와 Ypoint의 총합을 계산
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

    db.get(selectQuery, async (err, row) => {
      if (err) {
        throw err;
      }

      // `result` 객체에 Hpoint와 Ypoint 총합 저장
      result.hpointAll = row.totalHpoint;
      result.ypointAll = row.totalYpoint;
      console.log(result);
      //!active 테이블의 row 값을 조회해 turn 값으로 지정한다.
      db.get(`SELECT COUNT(*) AS rowCount FROM active`, async (err, row) => {
        if (err) {
          throw err;
        }
        const currentTurn = row.rowCount;
        await insertDb(
          db,
          "sum",
          result.hpointAll,
          result.ypointAll,
          currentTurn
        );
      });
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
app.get("/cafeData", (req, res) => {
  // 1. 쿼리 작성: 'active' 테이블에서 하나의 레코드를 가져오는 SQL 명령어
  const query = `
    SELECT nameOne, nameTwo, nameThree
    FROM active
    LIMIT 1
  `;

  // 2. 쿼리 실행: 데이터베이스에서 쿼리를 실행하고 결과를 가져옴
  db.get(query, (err, row) => {
    if (err) {
      // 3. 오류 처리: 쿼리 실행 중 오류가 발생하면 콘솔에 로그를 남기고, 클라이언트에 오류 응답을 보냄
      console.error("쿼리 실행 오류:", err);
      res.status(500).json({ success: false, message: "Query error" });
      return;
    }
    // 4. 성공적으로 데이터를 가져온 경우: 데이터를 JSON 형태로 클라이언트에 응답함
    res.json(row);
  });
});
// '/return' 경로에 대한 POST 요청 처리
app.post("/return", (req, res) => {
  const { key } = req.body; // 요청 본문에서 'key' 값을 추출

  // 'key' 값에 따라 적절한 응답을 전송
  if (key === "goToFirst") {
    res.json({ success: true, message: "Redirecting to /menu" });
  } else {
    res.status(400).json({ success: false, message: "Invalid key" }); // 잘못된 'key' 값에 대해 오류 응답
  }
});
app.use(function (err, req, res, next) {
  res.send("Error EXist");
});
app.listen(port, () => console.log(`http://localhost:${port}`));
