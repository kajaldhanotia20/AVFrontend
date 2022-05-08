const path = require("path"),
express = require("express"),
morgan = require("morgan"),
bodyParser = require("body-parser"),
cors = require("cors");

module.exports.init = () => {
    //initialize app
    const app = express();

    app.use(cors());

    //morgan used for logging HTTP requests to the console
    app.use(morgan("dev"));

    //bodyParser middleware used for resolving the req and res body objects (urlEncoded and json formats)
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    return app;
};
