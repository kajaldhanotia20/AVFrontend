const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "<html> <head>This page was render direcly from the server</head><body><h1> PLAN YOUR ROAD TRIP <p>You can view your current trip details</p><p>You can change your destination</p><p>You can add a drop</p><p>You can view current AV schedule</p></h1></body></html>"
  );
});

module.exports = router;
