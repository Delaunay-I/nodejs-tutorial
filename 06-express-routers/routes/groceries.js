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
  res.send(groceryList);
});

router.get("/:item", (req, res) => {
  const { item } = req.params;
  const foundItem = groceryList.find((q) => q.item === item);
  res.send(foundItem);
});

router.post("/", (req, res) => {
  groceryList.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
