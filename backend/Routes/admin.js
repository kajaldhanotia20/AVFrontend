const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.send(
    "<html> <head>This page was render direcly from the server</head><body><h1> ADMIN DASHBOARD!! <p>You can view AV details</p><p>You can view number of registered users</p></h1></body></html>"
  );
  //fetch details from MongoDB for live AV details
  //fetch details from MySQL for number of registered users and details about AVs in use
});

module.exports = router;
