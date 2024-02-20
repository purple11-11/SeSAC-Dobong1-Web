const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// TODO: 라우터 정의
router.get("/", controller.main);

// 전체 선수 조회
router.get("/players", controller.getPlayers);

module.exports = router;
