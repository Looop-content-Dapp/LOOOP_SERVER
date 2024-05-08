const express = require("express");
const app = express();
const PORT = 3000;
const waitListRouter = require("./routes/WaitlistRoute");
const mongoose = require("mongoose");
const cors = require("cors");

// For parsing JSON bodies
app.use(cors());
app.use(express.json());
app.use("/waitlist", waitListRouter);
app.get("/", (req, res) => {
  res.send("Hello World!, Server working fine");
});

app.listen(PORT, async () => {
  console.log(`App listening on PORT ${PORT}`);
  await mongoose
    .connect(
      "mongodb+srv://jayden38400:jayden38400@cluster0.l9li7mp.mongodb.net/"
    )
    .catch((err) => console.log(err));
});
