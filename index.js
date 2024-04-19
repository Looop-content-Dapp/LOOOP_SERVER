const express = require("express");
const app = express();
const PORT = 3000;
const waitListRouter = require("./routes/WaitlistRoute");

app.use("/waitlist", waitListRouter);

app.get("/", (req, res) => {
  res.send("Hello World!, Server working fine");
});

app.listen(PORT, async () => {
  console.log(`App listening on PORT ${PORT}`);
});
