const menuArray = require("./public/data/menuArr");
const database = require("sqlite3").verbose();
const db = new database.Database(`./database/school.db`, (err) => {
  if (err) {
    console.log("에러 발생 : ", err);
  }
});

// 테이블을 생성하는 함수, Promise 기반
const createDb = (tableName, rowOne, rowTwo, rowThree) => {
  return new Promise((resolve, reject) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS ${tableName} (${rowOne} TEXT NOT NULL, ${rowTwo} NUMBER NOT NULL, ${rowThree} NUMBER NOT NULL )`,
      (err) => {
        if (err) {
          reject(err); // 오류 발생 시 Promise를 reject
        } else {
          console.log(`${tableName} 생성됨`);
          resolve(); // 성공 시 Promise를 resolve
        }
      }
    );
  });
};

// 데이터를 삽입하는 함수, Promise 기반
const insertDb = (tableName, rowOneValue, rowTwoValue, rowThreeValue) => {
  return new Promise((resolve, reject) => {
    let insertQuery = "";
    let params = [rowOneValue, rowTwoValue, rowThreeValue];

    if (tableName === "base") {
      insertQuery = `INSERT INTO base (name, hpoint, ypoint) VALUES (?, ?, ?)`;
    } else if (tableName === "active") {
      insertQuery = `INSERT INTO active (selectName, hpointAll, ypointAll) VALUES (?, ?, ?)`;
    }

    db.run(insertQuery, params, function (err) {
      if (err) {
        reject(err);
      } else {
        console.log(
          `데이터 삽입됨: ${rowOneValue}, ${rowTwoValue}, ${rowThreeValue}`
        );
        resolve(); // Promise를 해결함
      }
    });
  });
};

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
    await activeCreate;
    await insertBaseData(); // 데이터 삽입 완료를 기다림
  } catch (error) {
    console.error("오류 : ", error);
  } finally {
    db.close(); // 모든 비동기 작업이 완료된 후 데이터베이스 닫기
  }
};

work();
// insertActiveData();
