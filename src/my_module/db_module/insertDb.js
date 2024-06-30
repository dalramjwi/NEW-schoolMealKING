// 데이터를 삽입하는 함수, Promise 기반
const insertDb = (db, tableName, rowOneValue, rowTwoValue, rowThreeValue) => {
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
