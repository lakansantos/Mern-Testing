const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/environment");

const convertToToken = (data) => {
  return jwt.sign(data, JWT_SECRET);
};
const login = async (req, res) => {
  console.log("test");
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(404).json({ mssg: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ mssg: "Invalid Password" });
    }

    res.status(200).json({
      _id: user.id,
      token: convertToToken({ id: user._id }),
    });
  } catch (error) {
    return res.status(500).json({ message: "Server does not respond" });
  }
};

module.exports = {
  login,
};
