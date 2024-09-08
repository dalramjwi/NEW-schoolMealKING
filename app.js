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
1;
// 라우터 설정
app.use("/", routeMain(db));
app.use("/menu", routeMenu(db));
app.use("/cafe", routeCafe(db, result));
app.use("/cafeData", routeCafeData(db));
app.use("/return", routeReturn(db));
// 손가락 베임 이벤트 처리 엔드포인트
let fingerEventOccurred = false; // 손가락 이벤트 상태 저장
let principleEventOccurred = false; // 교장 선생님 이벤트 상태 저장
let refrigeEventOccurred = false; // 냉장고 고장 이벤트 상태 저장
let seasoningEventOccurred = false; // 조미료 발견 이벤트 상태 저장

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
// 클라이언트가 finger 이벤트 발생 여부를 확인하기 위한 엔드포인트
app.get("/check-finger-event", (req, res) => {
  res.json({ fingerEventOccurred });
});
// 교장 선생님 이벤트 처리 엔드포인트
app.post("/principle", (req, res) => {
  const { event, effect } = req.body;
  console.log("교장 선생님 이벤트 - event:", event);
  console.log("교장 선생님 이벤트 - effect:", effect);
  if (event === "principle") {
    principleEventOccurred = true;
    console.log("Principle Event:", principleEventOccurred);
  }
  // 응답을 JSON으로 반환
  res.json({ message: "교장 선생님 이벤트 처리 완료" });
});

// 냉장고 고장 이벤트 처리 엔드포인트
app.post("/refrige", (req, res) => {
  const { event, effect } = req.body;
  console.log("냉장고 고장 이벤트 - event:", event);
  console.log("냉장고 고장 이벤트 - effect:", effect);
  if (event === "refrige") {
    refrigeEventOccurred = true;
    console.log("Refrige Event:", refrigeEventOccurred);
  }
  // 응답을 JSON으로 반환
  res.json({ message: "냉장고 고장 이벤트 처리 완료" });
});

// 조미료 발견 이벤트 처리 엔드포인트
app.post("/seasoning", (req, res) => {
  const { event, effect } = req.body;
  console.log("조미료 발견 이벤트 - event:", event);
  console.log("조미료 발견 이벤트 - effect:", effect);
  if (event === "seasoning") {
    seasoningEventOccurred = true;
    console.log("Seasoning Event:", seasoningEventOccurred);
  }
  // 응답을 JSON으로 반환
  res.json({ message: "조미료 발견 이벤트 처리 완료" });
});
app.post("/end", (req, res) => {
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
      if (principleEventOccurred) {
        console.log("Principle Event 처리 중...");
        ypointFinal += 3; // ypointFinal에 +3
      }

      if (refrigeEventOccurred) {
        console.log("Refrige Event 처리 중...");
        hpointFinal -= 3; // hpointFinal에 -3
      }

      if (seasoningEventOccurred) {
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
app.post("/restart", (req, res) => {
  // 데이터베이스 연결이 열린 상태에서 테이블의 데이터 삭제
  db.serialize(() => {
    db.run("DELETE FROM active", (err) => {
      if (err) {
        console.error("Error deleting data from active table:", err);
        return res.json({
          success: false,
          message: "Failed to delete data from active table",
        });
      }
      console.log("Data deleted from active table");
    });

    db.run("DELETE FROM sum", (err) => {
      if (err) {
        console.error("Error deleting data from sum table:", err);
        return res.json({
          success: false,
          message: "Failed to delete data from sum table",
        });
      }
      console.log("Data deleted from sum table");

      // 모든 작업이 완료되었을 때 성공 응답을 보냅니다.
      res.json({
        success: true,
        message: "Data deleted from active and sum tables successfully",
      });
    });
  });
});
// 서버 시작
app.listen(port, () => console.log(`http://localhost:${port}`));
