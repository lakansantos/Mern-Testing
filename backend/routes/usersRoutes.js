const express = require("express");
const router = express.Router();

const { registerUser, getUsers } = require("../controllers/usersController");
router.post("/signup", registerUser);
router.get("/users", getUsers);
module.exports = router;
