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
    db.run(
      `INSERT INTO ${tableName} (name, hpoint, ypoint) VALUES (?, ?, ?)`,
      [rowOneValue, rowTwoValue, rowThreeValue],
      function (err) {
        if (err) {
          console.log("오류 : ", err);
        } else {
          console.log(
            `데이터 삽입됨: ${rowOneValue}, ${rowTwoValue}, ${rowThreeValue}`
          );
        }
      }
    );
  };
};

const baseCreate = createDb("base", "name", "hpoint", "ypoint");
const activeCreate = createDb("active", "selectName", "hpointAll", "ypointAll");
// baseCreate();
// activeCreate();
