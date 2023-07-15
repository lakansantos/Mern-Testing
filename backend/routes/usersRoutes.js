const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authMiddleWare");
const {
  registerUser,
  getUsers,
  changeUserPassword,
} = require("../controllers/usersController");
router.post("/signup", registerUser);
router.get("/users", getUsers);
router.post("/users/change-password", authenticateToken, changeUserPassword);
module.exports = router;
