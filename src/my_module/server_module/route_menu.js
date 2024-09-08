/**
 * 이 파일은 Express 라우터를 정의해서 메뉴와 관련된 GET 및 POST 요청을 처리하는 역할
 * 클라이언트가 특정 엔드포인트로 요청을 보내면, 해당 요청에 맞는 메뉴 컴포넌트를 응답한다.
 */
const express = require("express");
const m = require("../../module_assemble.js");
const router = express.Router();
const top = require("../basic_module/literalParts/top.js");
const end = require("../basic_module/literalParts/end.js");
const body = require("../component/bodyMaker.js");

/**
 * 메뉴 라우터를 생성하고 반환하는 함수
 * @param {Object} db - SQLite3 데이터베이스 인스턴스
 * @returns {Object} router - 설정된 Express 라우터
 */
module.exports = function (db) {
  const router = express.Router();

  /**
   * 동기화된 데이터베이스 쿼리 함수 정의
   * @param {Object} db - SQLite3 데이터베이스 인스턴스
   * @returns {Promise<number>} - 행 수를 포함하는 Promise
   */
  const getRowCount = (db) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT COUNT(*) AS rowCount FROM sum", (err, row) => {
        if (err) {
          reject(err);
        } else {
          console.log("Row count:", row.rowCount);
          resolve(row.rowCount + 1);
        }
      });
    });
  };

  /**
   * 메뉴 컴포넌트를 동적으로 업데이트하는 함수
   * @param {Object} db - SQLite3 데이터베이스 인스턴스
   */
  const updateMenuComponent = async (db) => {
    try {
      const rowCount = await getRowCount(db);
      m.componentAssemble.menu = `${top.baseTop(
        `menu${rowCount}`,
        "public/css/menu"
      )}${body.menuBody}${end.baseEnd("public/js/menu")}`;
    } catch (error) {
      console.error("Error updating menu component:", error.message);
    }
  };

  /**
   * GET 요청에 대해 메뉴 컴포넌트를 응답으로 보냄
   * @name get/menu
   * @memberof module:router
   * @param {Object} req - 요청 객체
   * @param {Object} res - 응답 객체
   */
  router.get("/", async (req, res) => {
    await updateMenuComponent(db);
    res.send(m.componentAssemble.menu);
  });

  /**
   * POST 요청에 대해 메뉴 컴포넌트를 응답으로 보냄
   * @name post/menu
   * @memberof module:router
   * @param {Object} req - 요청 객체
   * @param {Object} res - 응답 객체
   */
  router.post("/", async (req, res) => {
    await updateMenuComponent(db); // 데이터베이스 업데이트 처리
    res.send(m.componentAssemble.menu);
  });

  return router;
};
