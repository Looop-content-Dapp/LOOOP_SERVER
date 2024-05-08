const express = require("express");
const registerUser = require("../controller/WaitlistController");

const waitListRouter = express.Router();

waitListRouter.post("/waitlist-user", registerUser);

module.exports = waitListRouter;
