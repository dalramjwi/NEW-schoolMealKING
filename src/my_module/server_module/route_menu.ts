import express from "express";
import m from "../../module_assemble.js";

const router = express.Router();

/**
 * GET 요청에 대해 메뉴 컴포넌트를 응답으로 보냄
 *
 * @name get/menu
 * @memberof module:router
 * @param {Object} req - 요청 객체
 * @param {Object} res - 응답 객체
 */
router.get("/menu", (req, res) => {
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
router.post("/menu", (req, res) => {
  res.send(m.componentAssemble.menu);
});

export default router;
