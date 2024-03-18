const express = require("express");

const app = express();

PORT = 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// response obj is responsible for sending data back to the client
app.get("/api/groceries", (request, response) => {
  // return a list of objects as response to this route
  response.send([
    {
      item: "apples",
      num: 5,
    },
    {
        item: "bread",
        num: 2
    },
    {
        item: "eggs",
        num: 12
    }
  ]);
});
