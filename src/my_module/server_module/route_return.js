/**
 * 이 파일은 Express 라우터를 정의하여 '/return' 엔드포인트에 대한 POST 요청을 처리하는 역할을 합니다.
 * 클라이언트에서 전달된 키 값에 따라 특정 동작을 수행하며,
 * 데이터베이스와 상호작용하여 Hpoint를 계산하고 해당 결과에 따라 적절한 응답을 반환합니다.
 */

const express = require("express");
const repeatToMenu = require("./route_actions/repeat_to_menu.js");
const hpointCheck = require("./route_actions/hpoint_check.js");
const randomPage = require("./route_actions/random_page.js");
const invalidKey = require("./route_actions/invalidkey.js");

module.exports = function (db) {
  const router = express.Router();

  /**
   * POST 요청으로 전달된 키 값에 따라 특정 동작을 수행함
   *
   * @name post/return
   * @memberof module:router
   * @param {Object} req - 요청 객체
   * @param {Object} res - 응답 객체
   */
  router.post("/", (req, res) => {
    const { key } = req.body;
    console.log(key);

    switch (key) {
      case "repeat":
        repeatToMenu(res);
        break;
      case "hpointCheck":
        hpointCheck(db, res);
        break;
      case "randomPage":
        randomPage(res);
        break;
      case "end":
        end(res);
      default:
        invalidKey(res);
        break;
    }
  });

  return router;
};
