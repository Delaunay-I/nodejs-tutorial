const express = require("express");

const app = express();

// allow express to accept json and urlencoded requests
app.use(express.json());
PORT = 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

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

app.get("/api/groceries", (req, res) => {
  res.send(groceryList);
});

app.get("/api/groceries/:item", (req, res) => {
  console.log(req.params.item);
});

// the callback in these functions are called request handler
// we can use the same path, and based on the method, the correct handler is called
app.post("/api/groceries", (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});
