const { Router } = require("express");

const router = Router();

const supermarkets = [
  {
    name: "no frills",
  },
  {
    name: "city market",
  },
  {
    name: "costco",
  },
];

router.get("/", (req, res) => {
  res.send(supermarkets);
});

module.exports = router;
