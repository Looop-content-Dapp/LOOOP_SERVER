const mongoose = require("mongoose");

const WaitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "User email required"],
    unique: true,
    validate: {
      validator: function (email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        );
      },
      message: "Email validation failed",
    },
  },
  walletAddress: {
    type: String,
    required: [true, "Wallet Address required"],
    unique: [true, "please value already exist"],
  },
  did: {
    type: String,
    required: [true, "DID required"],
    unique: [true, "please value already exist"],
  },
  date: { type: Date, default: Date.now },
});

const Waitlist = mongoose.model("waitlist", WaitlistSchema);
module.exports = Waitlist;
