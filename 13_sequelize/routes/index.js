const express = require("express");
const router = express.Router();

const controller = require("../controller/Cvisitor");

// 렌더링, get 요청
router.get("/", controller.main);
router.get("/visitors", controller.getVisitors);
// 한 개의 데이터 조회
router.get("/visitor/:id", controller.getVisitor);

// 등록, 삭제, 수정
router.post("/visitor", controller.postVisitor);
router.delete("/visitor", controller.deleteVisitor);
router.patch("/visitor", controller.patchVisitor);

module.exports = router;
