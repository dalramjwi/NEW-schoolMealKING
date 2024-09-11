const express = require("express");
const database = require("sqlite3").verbose();
const routeMain = require("./src/my_module/server_module/route_main.js");
const routeMenu = require("./src/my_module/server_module/route_menu.js");
const routeCafe = require("./src/my_module/server_module/route_cafe.js");
const routeCafeData = require("./src/my_module/server_module/route_cafeData.js");
const routeReturn = require("./src/my_module/server_module/route_return.js");
const work = require("./database.js");
const routeMenuData = require("./src/my_module/server_module/route_menuData.js");
const routeRestart = require("./src/my_module/server_module/route_restart.js");
const routeFinger = require("./src/my_module/server_module/route_finger.js");
const route_principle = require("./src/my_module/server_module/route_principle.js");
const route_refrige = require("./src/my_module/server_module/route_refrige.js");
const route_seasoning = require("./src/my_module/server_module/route_seasoning.js");
const route_end = require("./src/my_module/server_module/route_end.js");

const app = express();
const port = process.env.PORT || 3000;

// 데이터베이스 연결
const db = new database.Database(`./database/school.db`, (err) => {
  if (err) {
    console.log("에러 발생 : ", err);
  }
});
//db 실행
work();

// 빈 객체 `result` 정의
let result = { hpointAll: 0, ypointAll: 0 };

app.use("/public", express.static("public"));
app.use(express.json());

// 라우터 설정
app.use("/", routeMain(db));
app.use("/menu", routeMenu(db));
app.use("/cafe", routeCafe(db, result));
app.use("/cafeData", routeCafeData(db));
app.use("/return", routeReturn(db));
app.use("/menuData", routeMenuData(db));
app.use("/restart", routeRestart(db));
app.use("/finger", routeFinger());
app.use("/principle", route_principle());
app.use("/refrige", route_refrige());
app.use("/seasoning", route_seasoning());
app.use("/end", route_end(db));

app.listen(port, () => console.log(`http://localhost:${port}`));
