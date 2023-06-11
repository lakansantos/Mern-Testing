const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/environment");

const authenticateToken = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
        if (err) {
          res.status(403).json({ error: "Invalid token" });
          return;
        }

        const userId = decodedToken.id;
        req.userId = userId;

        next();
      });
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
  authenticateToken,
};
