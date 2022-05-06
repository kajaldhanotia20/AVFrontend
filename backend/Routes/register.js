const express = require("express");
const router = express.Router();
const pool = require("../pool.js");
const bcrypt = require("bcrypt");

router.post("/", (req, res) => {
  const myPlaintextPassword = req.body.password;
  const hash = bcrypt.hashSync(myPlaintextPassword, 5);
  pool.query(
    "INSERT INTO user (user_name,password,first_name,last_name,email,dob,phone,user_type,user_location) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      req.body.user_name,
      hash,
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.dob,
      req.body.phone,
      req.body.user_type,
      req.body.location,
    ],
    (err, result) => {
      if (err) {
        res.send({ message: "notok" +err});
      } else {
        res.send({ message: "ok" });
      }
    }
  );
});

module.exports = router;




