const auth = require("../db/authDB");

let router = require("express").Router();

router.post("/login", (req, res) => {
  console.log(req.body);

  console.log("found the express router");
});

router.post("/register", (req, res) => {
  const { username, password, email } = req.body;
  auth.create(username, password, email);
  console.log(req.body);

  console.log("found the express router");
});

module.exports = router;
