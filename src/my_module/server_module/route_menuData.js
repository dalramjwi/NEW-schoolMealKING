const express = require("express");

module.exports = function (db) {
  const router = express.Router();

  router.get("/", (req, res) => {
    db.all(`SELECT * FROM active`, (err, rows) => {
      if (err) {
        console.error("데이터 조회 오류:", err.message);
        return res.json({ success: false, message: "데이터 조회 오류" });
      }

      const rowsCount = rows.length;
      const menus = rows.flatMap((row) => [
        row.nameOne,
        row.nameTwo,
        row.nameThree,
      ]);
      res.json({ success: true, rowsCount, menus });
    });
  });

  return router;
};
