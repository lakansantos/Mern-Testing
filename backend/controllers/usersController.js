const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");

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

const getUsers = async (req, res) => {
  const Users = await User.find().sort({ createdAt: "desc" });

  try {
    res.status(200).json(Users);
  } catch (error) {
    res.status(400).json({ mssg: "Something went wrong" });
  }
};

module.exports = {
  registerUser,
  getUsers,
};
