const { Web5 } = require("@web5/api");
const Waitlist = require("../model/WaitlistSchema");
const assert = require("assert");

const registerUser = async (req, res) => {
  try {
    const { email, walletAddress } = req.body;
    // const { web5, did: aliceDid } = await Web5.connect();

    // const { record } = await web5.dwn.records.create({
    //   data: "Hello, Web5!",
    //   message: {
    //     dataFormat: "text/plain",
    //   },
    // });
    // console.log(
    //   aliceDid,
    //   web5.did.connectedDid,
    //   web5.did.agent.did,
    //   web5.did.agent._agentDid,
    //   web5.did.agent.dwn
    // );

    try {
      const waitlist = new Waitlist({
        email,
        walletAddress,
        did: "Sss",
      });

      await waitlist.save();
    } catch (error) {
      return res.status(400).json({
        message: "An error occurred",
        status: 400,
        error: error.message.includes("duplicate")
          ? Object.keys(error.errorResponse.keyValue)[0] +
            " " +
            "already in use"
          : error.message,
      });
    }

    return res
      .status(200)
      .json({ status: 200, msg: "Registered user successfully" });
  } catch (error) {
    console.log("Something went wrong", error);
    return res
      .status(500)
      .json({ errorMsg: "Something went wrong when registering user", error });
  }
};

module.exports = registerUser;
