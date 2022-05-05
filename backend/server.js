const express = require("express");
const dotenv = require("dotenv");
const request = require("request");
const bodyParser = require("body-parser");
const register = require("./Routes/register");
const login = require("./Routes/login");
const admin = require("./Routes/admin");
const roadtrip = require("./Routes/roadtrip");
const AVowner = require("./Routes/AVowner");
const reservation = require("./Routes/reservation");
const ridehistory = require("./Routes/rideHistory");
const mysql = require("mysql");
var cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/register", register);
app.use("/login", login);
app.use("/admin", admin);
app.use("/roadtrip", roadtrip);
app.use("/vehicle", AVowner);
app.use("/reservation", reservation);
app.use("/ridehistory", ridehistory);

const PORT = 8001;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
module.exports = app;
