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
			title: request.body.title,
			desc: request.body.desc,
			photo: request.body.photo,
			profilePic: request.body.profilePic,
			username: request.body.username,
			categories: request.body.categories,
		});
		post
			.save()
			.then((post) => {
				return response.status(201).json({ post });
			})
			.catch((error) => {
				console.log({
					name: error.name,
					message: error.message,
					stack: error.stack,
				});
				return response.status(400).json({ message: `No post was created..` });
			});
	} catch (error) {
		console.log({
			name: error.name,
			message: error.message,
			stack: error.stack,
		});
		return response
			.status(500)
			.json({
				message: `Server Under Maintenance Mood. Please try again later...`,
			});
	}
}

// update post
async function updatePost(request, response) {
	try {
		if (request.body.username === request.params.id) {
			const updatedPost = await Post.findByIdAndUpdate(
				request.params.id,
				{
					$set: request.body,
				},
				{ new: true },
			);
			if (updatedPost) {
				return response
					.status(200)
					.json({ message: `Post updated successfuly..` });
			} else {
				return response.status(500).json({ message: `Post update failed..` });
			}
		}
	} catch (error) {
		console.log({
			name: error.name,
			message: error.message,
			stack: error.stack,
		});
		return response
			.status(500)
			.json({
				message: `Server Under Maintenance Mood. Please try again later...`,
			});
	}
}

// delete post
async function deletePost(request, response) {
	try {
		const post = await Post.findById(request.params.id);
		if (post) {
			try {
				await post.deleteOne();
				return response.status(200).json("Post has been deleted...");
			} catch (err) {
				response.status(500).json(err);
			}
		} else {
			response.status(401).json("You can delete only your post!");
		}
	} catch (error) {
		console.log({
			name: error.name,
			message: error.message,
			stack: error.stack,
		});
		return response
			.status(500)
			.json({
				message: `Server Under Maintenance Mood. Please try again later...`,
			});
	}
}

// get one post
async function onePost(request, response) {
	try {
		const id = request.params.id;
		const post = await Post.findById(id);
		if (post) {
			return response.status(200).json({ post });
		} else {
			return response.status(404).json({ message: `No post was found.. ` });
		}
	} catch (error) {
		console.log({
			name: error.name,
			message: error.message,
			stack: error.stack,
		});
		return response
			.status(500)
			.json({
				message: `Server Under Maintenance Mood. Please try again later...`,
			});
	}
}

// get all posts
const getAllPosts = async (request, response) => {
	const username = request.query.user;
	const catName = request.query.categoryName;
	try {
		let posts;
		if (username) {
			posts = await Post.find({ username });
		} else if (catName) {
			posts = await Post.find({
				categories: {
					$in: [catName],
				},
			});
		} else {
			posts = await Post.find();
		}
		response.status(200).json(posts);
	} catch (err) {
		response.status(500).json(err);
	}
};

// exports
module.exports = {
	createPost,
	updatePost,
	deletePost,
	onePost,
	getAllPosts,
};
