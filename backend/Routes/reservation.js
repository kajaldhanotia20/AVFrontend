const express = require("express");
const router = express.Router();
const pool = require("../pool.js");
const uuid = require("uuid");

router.post("/", (req, res) => {
  let id = uuid.v1();
  console.log(id);
  pool.query(
    "Select vehicle_id from vehicle where vehicle_brand = ?;",
    [req.body.vehicle_brand],
    (err, result) => {
      if (err) {
        // console.log(err);
      } else {
        console.log(result[0]["vehicle_id"]);
        pool.query(
          "INSERT INTO reservation (reservation_id,vehicle_id,user_name,start_location,end_location,payment_type) VALUES (?,?,?,?,?,?);",
          [
            id,
            result[0]["vehicle_id"],
            req.body.user_name,
            req.body.start_location,
            req.body.end_location,
            // req.body.start_time,
            // req.body.end_time,
            req.body.payment_type,
            // req.body.trip_price,
          ],
          (err, result) => {
            if (err) {
              res.send({ message: "notok" });
              console.log(err);
            } else {
              res.send({ data: id });
            }
          }
        );
      }
    }
  );
});

module.exports = router;
