const express = require("express");
const registerUser = require("../controller/WaitlistController");

const waitListRouter = express.Router();

waitListRouter.get("/register-user", registerUser);

module.exports = waitListRouter;
