const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/usersController");
router.post("/signup", registerUser);

module.exports = router;