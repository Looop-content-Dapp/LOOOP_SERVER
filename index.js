const express = require("express");
const app = express();
const PORT = 3000;
const waitListRouter = require("./routes/WaitlistRoute");
const { Web5 } = require("@web5/api");

app.use("/waitlist", waitListRouter);

app.get("/", (req, res) => {
  res.send("Hello World!, Server working fine");
});

app.listen(PORT, async () => {
  const { web5, did: aliceDid } = await Web5.connect();

  console.log(`App listening on PORT ${PORT}`);
});
