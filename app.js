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
    const responseData = {
      success: true,
      message: "Data received and saved successfully",
    };
    res.status(200).json(responseData);
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
