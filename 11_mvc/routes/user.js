const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

/* 
    [예시]
    GET /user/aa
    router.get('/aa', controller.a);

    POST /user/login
    router.post('/login', controller.b);
 */

// GET /user
router.get("/", controller.user);

module.exports = router;
