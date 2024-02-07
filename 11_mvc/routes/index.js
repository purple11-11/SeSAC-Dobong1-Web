// localhost:8080/
const express = require("express");
const router = express.Router();

const controller = require("../controller/Cmain");

router.get("/", controller.main);

// GET /localhost:8080/comments
router.get("/comments", controller.comments);

// GET /localhost:8080/comment/:id (params 사용)
router.get("/comment/:id", controller.comment);

module.exports = router;
