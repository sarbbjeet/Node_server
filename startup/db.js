const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");
const db_url = config.get("DB_URL");
module.exports = () => {
    mongoose
        .connect(db_url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => winston.info("successfully connected with db"))
        .catch((err) => winston.error(err.message));
};