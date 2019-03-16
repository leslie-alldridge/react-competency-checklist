let router = require("express").Router();

router.post("/login", (req, res) => {
  console.log(req.body);

  console.log("found the express router");
});

router.post("/register", (req, res) => {
  console.log(req.body);

  console.log("found the express router");
});

module.exports = router;
