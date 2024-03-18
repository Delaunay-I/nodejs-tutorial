const express = require("express");
const userRoute = require("./routes/auth");

require("./database/index");

const app = express();
PORT = 3001;

app.use(express.json())

app.use('/auth', userRoute)


app.listen(PORT, console.log(`Server listening on port ${PORT}`));
