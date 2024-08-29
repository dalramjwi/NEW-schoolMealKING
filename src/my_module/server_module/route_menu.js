/**
 * 이 파일은 Express 라우터를 정의해서 메뉴와 관련된 GET 및 POST 요청을 처리하는 역할
 * 클라이언트가 특정 엔드포인트로 요청을 보내면, 해당 요청에 맞는 메뉴 컴포넌트를 응답한다.
 */
const express = require("express");
const m = require("../../module_assemble.js"); // require로 모듈을 불러옵니다.
const router = express.Router();

/**
 * GET 요청에 대해 메뉴 컴포넌트를 응답으로 보냄
 *
 * @name get/menu
 * @memberof module:router
 * @param {Object} req - 요청 객체
 * @param {Object} res - 응답 객체
 */
router.get("/", (req, res) => {
  res.send(m.componentAssemble.menu);
});

/**
 * POST 요청에 대해 메뉴 컴포넌트를 응답으로 보냄
 *
 * @name post/menu
 * @memberof module:router
 * @param {Object} req - 요청 객체
 * @param {Object} res - 응답 객체
 */
router.post("/", (req, res) => {
  res.send(m.componentAssemble.menu);
});

module.exports = router;
