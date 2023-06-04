const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, userName, password } = req.body;

    const existingUserName = await User.findOne({ userName });
    const existingEmail = await User.findOne({ email });

    if (existingUserName || existingEmail) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      userName,
      password: hashedPassword,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" });
  }
};

module.exports = {
  registerUser,
};
