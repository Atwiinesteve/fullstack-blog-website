// node modules
const bcrypt = require("bcrypt");

// configs
require("dotenv/config");

// user model
const User = require("../models/user.model");

// post model
const Post = require("../models/post.model");

// update user
async function updateUser(request, response) {
    try {
        if(request.body.userId === request.params.id) {
            if(request.body.password) {
                const salt = await bcrypt.genSalt(15);
                request.body.password = await bcrypt.hash(request.body.password, salt);
            }
            const updatedUser = await User.findByIdAndUpdate(request.params.id, {
                $set: request.body
            }, { new: true });
            if(updatedUser) {
                return response.status(200).json({ message: `User updated successfuly..`})
            } else {
                return response.status(500).json({ message: `User update failed..`})
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

// delete user
async function deleteUser(request, response) {
    try {
        if(request.body.userId === request.params.id) {
            const user = await User.findById(request.params.id);
            if(!user) {
                return response.status(404).json({ message: `No user found.. `})
            } else {
                const deletedUser = await User.findByIdAndDelete(request.params.id);
                const userPosts = await Post.deleteMany({ username: user.username })
                if(deletedUser) {
                    return response.status(200).json({ message: `User successfully deleted..`})
                } else {
                    return response.status(400).json({ message: `User not deleted.. `})
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

// get one user
async function oneUser(request, response) {
    try {
        const userId = request.params.id;
        const user = await User.findById(userId);
        if(user) {
            return response.status(200).json({ user })
        } else {
            return response.status(404).json({ message: `No user was found.. `})
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

// exports
module.exports = {
    updateUser,
    deleteUser,
    oneUser
};