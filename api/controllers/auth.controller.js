const User = require("../models/user.model");

// register user
async function registerUser (request, response) {
    try {
        const user = await User.findOne({ email: request.body.email });
        if(user) {
            return response.status(400).json({ message: `User with email ${request.body.email} already exists..`})
        } else {
            const salt = await bcrypt.genSalt(15);
            const hash = await bcrypt.hash(request.body.password, salt);
            const newUser = new User({
                username: request.body.username,
                email: request.body.email,
                password: hash,
                profilePic: request.body.files
            });
            newUser()
                .then((user) => {
                    return response.status(201).json({ user })
                })
                .catch((error) => {
                    console.log({
                    name: error.name,
                    message: error.message,
                    stack: error.stack
                });
                return response.status(500).json({ message: `User not registered..`})
            })
        }
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        return response.status(500).json({ message: `Server Under Maintenace Mood. Please try again later..`})
    }
};

// login user
async function loginUser (request, response) {
    try {
        const user = await User.findOne({ email: request.body.email });
        if(!user) {
            return response.status(400).json({ message: `User with email ${request.body.email} does not exist..`})
        } else {
            const validatePassword = await bcrypt.compare(request.body.password, user.password);
            if(!validatePassword) {
                return response.status(401).json({ message: `Invalid Email/Password..`})
            } else {
                const maxAge = 1*24*60*60;
                jwt.sign({ id: user._id, username: user.username }, process.env.SECRET_TOKEN, { expiresIn: maxAge }, (error, token) => {
                    if(error) {
                        console.log({ name: error.name, message: error.message, stack: error.stack })
                    } else {
                        response.status(200).json({ message: `User Loggedin successfully..`})
                        return response.cookie("token", token, { httpOnly: true, maxAge: maxAge })
                    }
                })
            }
        }
    } catch (error) {
        console.log({
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        return response.status(500).json({ message: `Server Under Maintenace Mood. Please try again later..`})
    }
};

// exports
module.exports = {
    registerUser,
    loginUser
}