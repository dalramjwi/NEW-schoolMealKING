const express = require("express");
const m = require("./src/module_assemble.js");
const database = require("sqlite3").verbose();
const createDb = require("./src/my_module/db_module/createDb.js");
const insertDb = require("./src/my_module/db_module/insertDb.js");
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

app.use("/public", express.static("public"));
app.use(express.json());
app.get("/", function (req, res) {
  res.send(m.componentAssemble.main);
});
app.post("/menu", function (req, res) {
  res.send(m.componentAssemble.menu);
});
app.post("/cafe", async function (req, res) {
  const parsedData = req.body;
  console.log("Received data:", parsedData);
  try {
    // `active` 테이블 생성
    await activeCreate;

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

    db.get(selectQuery, (err, row) => {
      if (err) {
        throw err;
      }

      // `result` 객체에 Hpoint와 Ypoint 총합 저장
      result.hpointAll = row.totalHpoint;
      result.ypointAll = row.totalYpoint;
      console.log(result);
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
app.use(function (err, req, res, next) {
  res.send("Error EXist");
});
app.listen(port, () => console.log(`http://localhost:${port}`));
