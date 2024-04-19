const { Web5 } = require("@web5/api");

const registerUser = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ status: 200, msg: "Registered user successfully" });
  } catch (error) {
    console.log("Something went wrong", error);
    return res
      .status(500)
      .json({ error: "Something went wrong when registering user" });
  }
};

module.exports = registerUser;
