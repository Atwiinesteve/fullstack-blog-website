const mongoose = require("mongoose");

const connect = mongoose.connect(process.env.DATABASE_URL)
connect.then(() => {
    console.log(`Database Connection Successfully Established..`)
})
.catch((error) => {
    console.log(`Database connection failed: ${ error.message }`)
});

module.exports = connect;