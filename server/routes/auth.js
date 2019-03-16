const auth = require("../db/authDB");

let router = require("express").Router();

router.post("/login", (req, res) => {
  console.log("found the express router");
});

router.post("/register", (req, res) => {
  const { username, password, email } = req.body;
  auth.create(username, password, email);
});

module.exports = router;
