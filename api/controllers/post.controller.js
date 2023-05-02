// node modules

// configs
require("dotenv/config");

// user model
const User = require("../models/user.model");

// post model
const Post = require("../models/post.model");

// create post
async function createPost(request, response) {
    try {
        const post = new Post({
           ...request.body 
        })
        post.save()
            .then((post) => {
                return response.status(201).json({ post })
            })
            .catch((error) => {
                console.log({
                    name: error.name,
                    message: error.message,
                    stack: error.stack
                });
                return response.status(400).json({ message: `No post was created..`})
            })
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        return response.status(500).json({ message: `Server Under Maintenance Mood. Please try again later...`})
    }
}

// update post
async function updatePost(request, response) {
    try {
        if(request.body.username === request.params.id) {
            const updatedPost = await Post.findByIdAndUpdate(request.params.id, {
                $set: request.body
            }, { new: true });
            if(updatedPost) {
                return response.status(200).json({ message: `Post updated successfuly..`})
            } else {
                return response.status(500).json({ message: `Post update failed..`})
            }
        }
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        return response.status(500).json({ message: `Server Under Maintenance Mood. Please try again later...`})
    }
};

// delete post
async function deletePost(request, response) {
    try {
        if(request.body.username === request.params.id) {
            const post = await Post.findById(request.params.id);
            if(!post) {
                return response.status(404).json({ message: `No post found.. `})
            } else {
                const deletedPost = await Post.findByIdAndDelete(request.params.id);
                if(deletedPost) {
                    return response.status(200).json({ message: `Post successfully deleted..`})
                } else {
                    return response.status(400).json({ message: `Post not deleted.. `})
                }
            }
        }
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        return response.status(500).json({ message: `Server Under Maintenance Mood. Please try again later...`})
    }
};

// get one post
async function onePost(request, response) {
    try {
        const postId = request.params.id;
        const post = await Post.findById(postId);
        if(post) {
            return response.status(200).json({ post })
        } else {
            return response.status(404).json({ message: `No post was found.. `})
        }
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        return response.status(500).json({ message: `Server Under Maintenance Mood. Please try again later...`})
    }
};

// get all posts
async function getAllPosts(request, response) {
    try {
        const username = request.query.username;
        const categoryName = request.query.categoryName;
        let posts;
        if(username) {
            posts = await Post.find({ username })
        } else if(categroyName) {
            posts = await Post.find({ categories: {
                $in: [categoryName]
            }})
        } else {
            posts = await Post.find()
        }
        return response.status(200).json({ posts })
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        return response.status(500).json({ message: `Server Under Maintenance Mood. Please try again later...`})
    }
};

// exports
module.exports = {
    createPost,
    updatePost,
    deletePost,
    onePost,
    getAllPosts
};