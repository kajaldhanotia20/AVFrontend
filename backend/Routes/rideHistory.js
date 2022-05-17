const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

router.post("/", (req, res) => {
  console.log(req.body.user_name);
  pool.query(
    "Select vehicle_id, start_location, end_location, trip_price from reservation where user_name = ?",
    [req.body.user_name],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "notok" });
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/1", (req, res) => {
  pool.query("Select * from reservation", (err, result) => {
    if (err) {
      console.log(err);
      res.send({ message: "notok" });
    } else {
      res.send(result);
    }
  });
});
module.exports = router;
