const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, path.join(__dirname, '../images'));
    },
    filename: (request, file, cb) => {
        cb(null, request.body.name)
    }
});

const uploads = multer({ storage: storage });

module.exports = uploads;