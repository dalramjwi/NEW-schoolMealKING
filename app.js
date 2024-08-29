const express = require("express");
const m = require("./src/module_assemble.js");
const database = require("sqlite3").verbose();
const routeMain = require("./src/my_module/server_module/route_main.js");
const routeMenu = require("./src/my_module/server_module/route_menu.js");
const routeCafe = require("./src/my_module/server_module/route_cafe.js");
const routeCafeData = require("./src/my_module/server_module/route_cafeData.js");
const routeReturn = require("./src/my_module/server_module/route_return.js");
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

// 빈 객체 `result` 정의
let result = { hpointAll: 0, ypointAll: 0 };
work();

app.use("/public", express.static("public"));
app.use(express.json());

// 라우터 설정
app.use("/", routeMain(db), console.log(rout)); // 라우터 함수에 필요한 인자를 전달합니다.
app.use("/menu", routeMenu);

// 새로운 GET 요청 핸들러 추가
// app.get("/menu", function (req, res) {
//   res.send(m.componentAssemble.menu);
// });
// app.post("/menu", function (req, res) {
//   res.send(m.componentAssemble.menu);
// });
app.use("/cafe", routeCafe(db, result));
app.use("/cafeData", routeCafeData(db));
app.use("/return", routeReturn(db));

// 에러 처리 미들웨어
app.use(function (err, req, res, next) {
  res.send("에러 발생");
});

// 서버 시작
app.listen(port, () => console.log(`http://localhost:${port}`));
