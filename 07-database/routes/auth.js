const { Router } = require("express");

// we work with the model itself, no need to create an instance of the model
const User = require("../database/models/User");

const router = Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  // check the username or the email are in the database
  const userDB = await User.findOne({ $or: [{username}, {email}]  });
  if (userDB) {
    res.status(400).send({ msg: "User already exists!" });
  } else {
    const newUser = await User.create({ username, password, email });
    res.send(201);
  }
});

module.exports = router;