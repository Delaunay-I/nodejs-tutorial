const { Router } = require("express");

const router = Router();

const supermarkets = [
  {
    id: 1,
    name: "no frills",
    miles: 0.5,
  },
  {
    id: 2,
    name: "city market",
    miles: 1,
  },
  {
    id: 3,
    name: "costco",
    miles: 3.7,
  },
  {
    id: 4,
    name: "walmart",
    miles: 2.5,
  },
  {
    id: 5,
    name: "whole foods",
    miles: 1.2,
  },
  {
    id: 6,
    name: "trader joe's",
    miles: 0.8,
  },
  {
    id: 7,
    name: "safeway",
    miles: 2.1,
  },
];

// Use query parameters to filter and sort in db
router.get("", (req, res) => {
    // destructure the parameter from query
  const { miles } = req.query;
  const parsedMiles = parseInt(miles);
  if (!isNaN(parsedMiles)) {
    const filtered = supermarkets.filter((q) => q.miles <= parsedMiles);
    res.send(filtered);
  } else {
    console.log("nothing was found with the properties specified");
    res.send(supermarkets);
  }
});

module.exports = router;
