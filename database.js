const menuArray = require("./public/data/menuArr");
const database = require("sqlite3").verbose();
const db = new database.Database(`./database/school.db`, (err) => {
  if (err) {
    console.log("에러 발생 : ", err);
  }
});

// Promise 기반으로 `createDb()` 호출
const baseCreate = createDb("base", "name", "hpoint", "ypoint");
const activeCreate = createDb("active", "selectName", "hpointAll", "ypointAll");

const insertBaseData = async () => {
  const insertMenu = menuArray.menuValue();
  for (const [name, hpoint, ypoint] of insertMenu) {
    await insertDb("base", name, hpoint, ypoint); // 기존 insertDb 호출
  }
};

// 비동기 함수 `work`에서 `await` 사용
const work = async () => {
  try {
    await baseCreate; // 테이블 생성 완료를 기다림
    // await activeCreate;
    await insertBaseData(); // 데이터 삽입 완료를 기다림
  } catch (error) {
    console.error("오류 : ", error);
  } finally {
    db.close(); // 모든 비동기 작업이 완료된 후 데이터베이스 닫기
  }
};

work();
// insertActiveData();
