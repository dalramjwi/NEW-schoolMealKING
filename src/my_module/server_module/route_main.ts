const express = require("express");
const app = express();
const m = require("./src/module_assemble.js");
const createDb = require("./src/my_module/db_module/createDb.js");
const database = require("sqlite3").verbose();
const router = express.Router();

/**
 * SQLite3 데이터베이스 인스턴스를 생성함
 * @const db
 * @param {string} dbFilePath - 데이터베이스 파일 경로
 * @param {function} callback - 데이터베이스 연결 시 호출되는 콜백 함수
 */
const db = new database.Database(`./database/school.db`, (err) => {
  if (err) {
    console.log("에러 발생 : ", err);
  }
});

/**
 * 데이터베이스에서 테이블을 생성함
 * @const activeCreate
 * @param {Object} db - SQLite3 데이터베이스 인스턴스
 * @param {string} tableName - 생성할 테이블 이름
 * @param {string} column1 - 첫 번째 컬럼 이름
 * @param {string} column2 - 두 번째 컬럼 이름
 * @param {string} column3 - 세 번째 컬럼 이름
 */
const activeCreate = createDb(db, "active", "nameOne", "nameTwo", "nameThree");

/**
 * 모듈을 익스포트하는 함수임
 * 라우터를 설정하고 반환함
 *
 * @function
 * @returns {Object} router - 설정된 Express 라우터
 */
module.exports = function () {
  /**
   * 기본 라우트로 GET 요청을 처리함
   *
   * @name get/
   * @memberof module:router
   * @param {Object} req - 요청 객체
   * @param {Object} res - 응답 객체
   */
  router.get("/", async function (req, res) {
    // 데이터베이스 테이블 생성이 완료될 때까지 대기함
    await activeCreate;

    // 조립된 컴포넌트를 응답으로 보냄
    res.send(m.componentAssemble.main);
  });

  return router;
};
