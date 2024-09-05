const database = require("sqlite3").verbose();
const db = new database.Database(`../../../database/school.db`, (err) => {
  if (err) {
    console.log("에러 발생 : ", err);
  }
});
function getRowCount() {
  return new Promise((resolve, reject) => {
    db.get("SELECT COUNT(*) AS rowCount FROM sum", (err, row) => {
      if (err) {
        return reject(err);
      }
      resolve(row.rowCount);
    });
  });
}
module.exports = { getRowCount };
