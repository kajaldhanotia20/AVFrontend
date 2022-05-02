const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../pool.js");

router.post("/", (req, res) => {
  const enteredPassword = req.body.password;
  pool.query(
    "SELECT * from user where user_name = ?",
    [req.body.user_name],
    (err, result) => {
      if (err || Object.keys(result).length === 0) {
        res.send({ message: "notok" });
      } else {
        const hashedPassword = result[0].password;
        bcrypt.compare(
          enteredPassword,
          hashedPassword,
          function (err, isMatch) {
            if (err || !isMatch) {
              res.send({ message: "notok" });
            } else {
              res.send({ message: "ok" });
            }
          }
        );
      }
    }
  );
});

module.exports = router;
