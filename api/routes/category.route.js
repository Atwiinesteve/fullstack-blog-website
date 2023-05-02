// node modules
const express = require("express");

// express router
const router = express.Router();

// controllers
const { createCategory, getAllCategories } = require("../controllers/category.controller");

// create category
router.post("/create-category", createCategory);

// get all categories
router.get("/categories", getAllCategories);

// router exports
module.exports = router;