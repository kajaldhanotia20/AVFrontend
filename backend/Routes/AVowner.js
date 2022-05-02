const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "<html> <head>Service Mangement</head><body><h1> Service 4 </h1><h1 style='color:red;margin-left:40px'> AV Owner View <p>1) AV Onwer can add new AV </p><p>2) AV Onwer can delete existing AV </p><p>2) AV Onwer can view his/her AV details </p></h1><h1 style='color:black;margin-left:40px'> Backend Logic <p>1) New AV is added into MySQL DB </p><p>2) Deleted AV is discared from MySQL DB registered users</p></h1></body></html>"
  );
  //fetch details from MongoDB for live AV details
  //fetch details from MySQL for number of registered users and details about AVs in use
});

module.exports = router;
