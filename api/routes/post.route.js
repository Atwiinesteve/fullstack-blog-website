// node modules
const express = require("express");

// express router
const router = express.Router();

// controllers
const { onePost, updatePost, deletePost, createPost, getAllPosts } = require("../controllers/post.controller");

// get all posts
router.get("/posts", getAllPosts);

// create post
router.post("/create-post", createPost)

// get one post
router.get("/post/:id", onePost);

// update post
router.put("/update-post/:id", updatePost);

// delete post
router.delete("/delete-post/:id", deletePost);

// router exports
module.exports = router;