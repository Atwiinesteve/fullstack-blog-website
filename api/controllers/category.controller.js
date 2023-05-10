// node modules

// configs
require("dotenv/config");

// category model
const Category = require("../models/category.model");

// create category
async function createCategory(request, response) {
    try {
        const category = new Category({
           ...request.body 
        })
        category.save()
            .then((category) => {
                return response.status(201).json({ category })
            })
            .catch((error) => {
                console.log({
                    name: error.name,
                    message: error.message,
                    stack: error.stack
                });
                return response.status(400).json({ message: `No category was created..`})
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

// get all posts
async function getAllCategories(request, response) {
    try {
        const categories = await Category.find();
        if(categories) {
            return response.status(200).json({ categories })
        } else {
            return response.status(404).json({ message: `No categories were found..`})
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
    createCategory,
    getAllCategories
};