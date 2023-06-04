const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
    if (err) {
      res.json({
        error: err,
      });
    }

    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      userName: req.body.userName,
      password: hashedPassword,
    });

    user
      .save()
      .then((user) => {
        res.json({
          message: user,
        });
      })
      .catch((err) => {
        res.json({
          message: err,
        });
      });
  });
};

module.exports = {
  registerUser,
};
