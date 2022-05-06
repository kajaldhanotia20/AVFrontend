const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

router.post("/add", (req, res) => {
  pool.query(
    "INSERT INTO vehicle (vehicle_class,vehicle_model,vehicle_brand,vehicle_license) VALUES (?,?,?,?)",
    [
      req.body.vehicle_class,
      req.body.vehicle_model,
      req.body.vehicle_brand,
      req.body.vehicle_license,
    ],
    (err, result) => {
      if (err) {
        res.send({ message: "notok" });
      } else {
        res.send({ message: "ok" });
      }
    }
  );
});

router.delete("/delete", (req, res) => {
  pool.query(
    "DELETE FROM vehicle where vehicle_id = ?",
    [req.body.vehicle_id],
    (err, result) => {
      if (err) {
        res.send({ message: "notok" });
      } else {
        res.send({ message: "ok" });
      }
    }
  );
});


router.put("/update",(req,res)=>{
  pool.query("UPDATE vehicle SET vehicle_class=? ,vehicle_model=?,vehicle_brand=?,vehicle_license=?  where vehicle_id=?",
  [req.body.vehicle_class,
    req.body.vehicle_model,
    req.body.vehicle_brand,
    req.body.vehicle_license,
    req.body.vehicle_id
  ],
  (err,result) => {
    if(err)
    res.send({message:"updatenotok"});
    else
    res.send({message:"updateok"});
  }
  );
});

module.exports = router;
