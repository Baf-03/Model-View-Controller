const express = require("express");
const { SignupController, LoginController } = require("../controller/authController");
const { CreatePost, GetUserPost, delPost } = require("../controller/postController");
const router = express.Router();

//-------------------authcontrollers------------------------
router.post("/register",SignupController)
router.post("/login",LoginController)
router.post("/post",CreatePost)
router.post("/myPosts",GetUserPost)
router.post("/deletePost",delPost)

module.exports = router