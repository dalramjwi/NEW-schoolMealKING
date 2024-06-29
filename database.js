const database = require("sqlite3").verbose();
const db = new database.Database("./database/base.db", (err) => {
  console.log("에러 발생 : ", err);
});
const createDb = (tableName, rowOne, rowTwo, rowThree) => {
  return () => {
    db.run(
      `CREATE TABLE ${tableName} (${rowOne} TEXT NOT NULL, ${rowTwo} NUMBER NOT NULL, ${rowThree} NUMBER NOT NULL )`,
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

const baseCreate = createDb("base", "name", "hpoint", "ypoint");
const activeCreate = createDb("active", "selectName", "hpointAll", "ypointAll");
