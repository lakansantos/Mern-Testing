const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getSinglePost,
  addPost,
  editPost,
  deletePost,
  searchPost,
} = require("../controllers/postsController");
const { authenticateToken } = require("../middlewares/authMiddleWare");

router.get("/", (req, res) => {
  res.json({ mssg: "Yehey!" });
});

//route for getting all posts
router.get("/posts", authenticateToken, getAllPosts);

//route for getting single post
router.get("/posts/:id", authenticateToken, getSinglePost);

//route for adding post
router.post("/posts", authenticateToken, addPost);

//route for editing a single post
router.put("/posts/:id", authenticateToken, editPost);

router.delete("/posts/:id", authenticateToken, deletePost);

router.get("/search", authenticateToken, searchPost);

module.exports = router;
