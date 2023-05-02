const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv/config");

require("./database/database.connections");

const app = express()
const PORT = process.env.PORT || 9090;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/auth.route"));

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
})