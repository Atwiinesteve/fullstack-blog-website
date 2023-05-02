const multer = require("multer");

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, "images")
    },
    filename: (request, file, cb) => {
        cb(null, request.body.name)
    }
});

const uploads = multer({ storage: storage });

module.exports = uploads;