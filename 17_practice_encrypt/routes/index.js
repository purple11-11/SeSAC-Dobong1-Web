const express = require("express");
const router = express.Router();

const controller = require("../controller/Cuser");

/* GET */
router.get("/", controller.main);
router.get("/signup", controller.getSignup);
router.get("/signin", controller.getSignin);
router.get("/profile", controller.getProfile);

/* POST */
router.post("/doubleCheck", controller.postDoubleCheck);
router.post("/signup", controller.postSignup);
router.post("/signin", controller.postSignin);
router.post("/profile", controller.postProfile);

/* PATCH */
router.patch("/profile/edit", controller.patchProfile);

/* DELETE */
router.delete("/logout", controller.logout);
router.delete("/profile/delete", controller.deleteProfile);
module.exports = router;
