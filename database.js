const menuArray = require("./public/data/menuArr");
const database = require("sqlite3").verbose();
const db = new database.Database(`./database/school.db`, (err) => {
  console.log("에러 발생 : ", err);
});
const createDb = (tableName, rowOne, rowTwo, rowThree) => {
  return () => {
    db.run(
      `CREATE TABLE IF NOT EXISTS ${tableName} (${rowOne} TEXT NOT NULL, ${rowTwo} NUMBER NOT NULL, ${rowThree} NUMBER NOT NULL )`,
      (err) => {
        if (err) {
          console.log("오류 : ", err);
        } else {
          console.log(`${tableName} 생성됨`);
        }
      }
    );
  };
};
const insertDb = (tableName, rowOneValue, rowTwoValue, rowThreeValue) => {
  return () => {
    let insertQuery = "";
    let params = [];

    if (tableName === "base") {
      insertQuery = `INSERT INTO base (name, hpoint, ypoint) VALUES (?, ?, ?)`;
      params = [rowOneValue, rowTwoValue, rowThreeValue];
    } else if (tableName === "active") {
      insertQuery = `INSERT INTO active (selectName, hpointAll, ypointAll) VALUES (?, ?, ?)`;
      params = [rowOneValue, rowTwoValue, rowThreeValue];
    }

    db.run(insertQuery, params, function (err) {
      if (err) {
        console.log("오류 : ", err);
      } else {
        console.log(
          `데이터 삽입됨: ${rowOneValue}, ${rowTwoValue}, ${rowThreeValue}`
        );
      }
    });
  };
};
const baseCreate = createDb("base", "name", "hpoint", "ypoint");
const activeCreate = createDb("active", "selectName", "hpointAll", "ypointAll");
const insertBaseData = () => {
  const insertMenu = menuArray.menuValue();
  insertMenu.forEach(([name, hpoint, ypoint]) => {
    const insert = insertDb("base", name, hpoint, ypoint);
    insert();
  });
};
const work = async () => {
  try {
    // 테이블 생성
    await baseCreate();
    await activeCreate();

    // 데이터 삽입
    await insertBaseData();
  } catch (error) {
    console.error("오류 : ", error);
  } finally {
    db.close();
  }
};
work();
// insertActiveData();
