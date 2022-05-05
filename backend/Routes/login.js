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
      console.log(result[0].user_type);
      if (err || Object.keys(result).length === 0) {
        res.send({ message: "notok" });
        console.log(err);
      } else {
        const hashedPassword = result[0].password;
        bcrypt.compare(
          enteredPassword,
          hashedPassword,
          function (err, isMatch) {
            if (err || !isMatch) {
              console.log(err);
              res.send({ message: "notok" });
            } else {
              if (result[0].user_type === "AV User") {
                res.send({ message: "AV User ok" });
              } else res.send({ message: "AV Owner ok" });
            }
          }
        );
      }
    }
  );
});

module.exports = router;
