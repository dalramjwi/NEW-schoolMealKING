// 테이블을 생성하는 함수, Promise 기반
const createDb = (db, tableName, rowOne, rowTwo, rowThree, sum = "0") => {
  return new Promise((resolve, reject) => {
    if (sum === "1") {
      db.run(
        `CREATE TABLE IF NOT EXISTS ${tableName} (${rowOne} NUMBER, ${rowTwo} NUMBER, ${rowThree} NUMBER)`,
        (err) => {
          if (err) {
            reject(err); // 오류 발생 시 Promise를 reject
          } else {
            console.log(`${tableName} 생성됨`);
            resolve(); // 성공 시 Promise를 resolve
          }
        }
      );
    }
    db.run(
      `CREATE TABLE IF NOT EXISTS ${tableName} (${rowOne} TEXT NOT NULL, ${rowTwo} NUMBER NOT NULL, ${rowThree} NUMBER NOT NULL )`,
      (err) => {
        if (err) {
          reject(err); // 오류 발생 시 Promise를 reject
        } else {
          // console.log(`${tableName} 생성됨`);
          resolve(); // 성공 시 Promise를 resolve
        }
      }
    );
  });
};
module.exports = createDb;
