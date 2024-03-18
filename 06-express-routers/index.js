const express = require("express");
const cookieParser = require('cookie-parser');

const groceriesRoute = require("./routes/groceries");
const marketRoute = require("./routes/markets");

const app = express();
const PORT = 3001;

app.use(cookieParser())
app.use(express.json());

// pass the router after the other middlewares
// we can perfix routes here
app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketRoute);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
