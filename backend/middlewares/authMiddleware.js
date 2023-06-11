const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/environment");

const verifyToken = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      await jwt.verify(token, JWT_SECRET);
      next();
    } catch (error) {
      res.status(400);
      throw new Error("Not Authorized");
    }
    if (!token) {
      res.status(400);
      throw new Error("No token found. Please relogin");
    }
  }
};

module.exports = {
  verifyToken,
};
