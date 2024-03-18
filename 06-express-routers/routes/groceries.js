// we can group our routes via express router
const { Router } = require("express");

const router = Router();

const groceryList = [
  {
    item: "apples",
    num: 5,
  },
  {
    item: "bread",
    num: 2,
  },
  {
    item: "eggs",
    num: 12,
  },
];

router.get("/", (req, res) => {
    res.cookie('Visited', true, {maxAge: 60000})
  res.send(groceryList);
});

// use route parameters for checking existence of an item
router.get("/:item", (req, res) => {
  // can use cookies, parsed in req.cookies using cooki-parser package
  console.log(req.cookies);
  const { item } = req.params;
  const foundItem = groceryList.find((q) => q.item === item);
  res.send(foundItem);
});

router.post("/", (req, res) => {
  groceryList.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
