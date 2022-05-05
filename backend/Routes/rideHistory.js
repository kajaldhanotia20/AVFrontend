const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

router.post("/", (req, res) => {
  pool.query(
    "Select vehicle_id, start_location, end_location, trip_price from reservation where user_name = ?",
    [req.body.user_name],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "notok" });
      } else {
        res.send(result);
        // console.log(result[0]["reservation_id"]);
      }
    }
  );
});
module.exports = router;
