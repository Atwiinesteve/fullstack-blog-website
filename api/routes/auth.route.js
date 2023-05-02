const express = require("express");

const router = express.Router();

// controllers
const { registerUser, loginUser } = require("../controllers/user.controllers");

// register user
router.post("/register-user", registerUser)

// login user
router.post("/login-user", loginUser);

// router exports
module.exports = router;