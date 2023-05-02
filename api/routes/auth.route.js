// node modules
const express = require("express");

// express router
const router = express.Router();

// controllers
const { registerUser, loginUser } = require("../controllers/auth.controller");

// register user
router.post("/register-user", registerUser)

// login user
router.post("/login-user", loginUser);

// router exports
module.exports = router;