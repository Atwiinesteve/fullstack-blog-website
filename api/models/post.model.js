const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        default: ""
    },
    categories: {
        type: Array,
        required: true,
        default: []
    }
}, {
    timestamps: true
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;