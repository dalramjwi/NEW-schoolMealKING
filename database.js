const database = require("sqlite3").verbose();
const db = new database.Database(`./database/school.db`, (err) => {
  if (err) {
    console.log("에러 발생 : ", err);
  }
});
const menuArray = require("./public/data/menuArr");
const createDb = require("./src/my_module/db_module/createDb.js");
const insertDb = require("./src/my_module/db_module/insertDb.js");

// Promise 기반으로 `createDb()` 호출
const baseCreate = createDb(db, "base", "name", "hpoint", "ypoint");
const sumCreate = createDb(db, "sum", "hpointAll", "ypointAll", "turn", "1");
const insertBaseData = async () => {
  const insertMenu = menuArray.menuValue();
  for (const [name, hpoint, ypoint] of insertMenu) {
    await insertDb(db, "base", name, hpoint, ypoint);
  }
};

// 비동기 함수 `work`에서 `await` 사용
const work = async () => {
  try {
    await baseCreate; // 테이블 생성 완료를 기다림
    await sumCreate;
    // await activeCreate;
    await insertBaseData(); // 데이터 삽입 완료를 기다림
  } catch (error) {
    console.error("오류 : ", error);
  }
};

work();
// insertActiveData();
module.exports = work;
