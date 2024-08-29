import express from "express";
import m from "../../module_assemble.js";

const router = express.Router();

router.get("/menu", (req, res) => {
  res.send(m.componentAssemble.menu);
});

router.post("/menu", (req, res) => {
  res.send(m.componentAssemble.menu);
});

export default router;
