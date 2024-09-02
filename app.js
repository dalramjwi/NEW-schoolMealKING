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
app.use("/", routeMain(db));
app.use("/menu", routeMenu);
app.use("/cafe", routeCafe(db, result));
app.use("/cafeData", routeCafeData(db));
app.use("/return", routeReturn(db));
// 손가락 베임 이벤트 처리 엔드포인트

let fingerEventOccurred = false; // 손가락 이벤트 상태 저장

app.post("/finger", (req, res) => {
  const { event, effect } = req.body;
  console.log("finger 이벤트 요청 수신:", event, effect);

  if (event === "finger") {
    fingerEventOccurred = true; // 이벤트 발생 시 상태 변경
    res.json({ success: true, message: "finger" });
  } else {
    res.json({ success: false, message: "unknown event" });
  }
});

// 교장 선생님 이벤트 처리 엔드포인트
app.post("/principle", (req, res) => {
  const { event, effect } = req.body;
  console.log("교장 선생님 이벤트 - event:", event);
  console.log("교장 선생님 이벤트 - effect:", effect);

  // 응답을 JSON으로 반환
  res.json({ message: "교장 선생님 이벤트 처리 완료" });
});

// 냉장고 고장 이벤트 처리 엔드포인트
app.post("/refrige", (req, res) => {
  const { event, effect } = req.body;
  console.log("냉장고 고장 이벤트 - event:", event);
  console.log("냉장고 고장 이벤트 - effect:", effect);

  // 응답을 JSON으로 반환
  res.json({ message: "냉장고 고장 이벤트 처리 완료" });
});

// 조미료 발견 이벤트 처리 엔드포인트
app.post("/seasoning", (req, res) => {
  const { event, effect } = req.body;
  console.log("조미료 발견 이벤트 - event:", event);
  console.log("조미료 발견 이벤트 - effect:", effect);

  // 응답을 JSON으로 반환
  res.json({ message: "조미료 발견 이벤트 처리 완료" });
});

// 에러 처리 미들웨어
app.use(function (err, req, res, next) {
  res.send("에러 발생");
});

// 서버 시작
app.listen(port, () => console.log(`http://localhost:${port}`));
