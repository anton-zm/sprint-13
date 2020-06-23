const usersRouter = require("express").Router();

const path = require("path");

const usersArray = path.join(__dirname, "../data/users.json");

usersRouter.get("/users", (req, res) => {
  res.send(usersArray);
});

module.exports = usersRouter;
