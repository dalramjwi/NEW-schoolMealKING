const menudata = require("./public/data/menuData.js");
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
baseCreate();
activeCreate();
// const insertBaseData = insertDb("base", "김치찌개", 1, 2);
// insertBaseData();
// insertActiveData();
console.log(menudata);
