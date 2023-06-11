const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getSinglePost,
  addPost,
  editPost,
  deletePost,
} = require("../controllers/postsController");
const { verifyToken } = require("../middlewares/authMiddleWare");

router.get("/", (req, res) => {
  res.json({ mssg: "Yehey!" });
});

//route for getting all posts
router.get("/posts", verifyToken, getAllPosts);

//route for getting single post
router.get("/posts/:id", verifyToken, getSinglePost);

//route for adding post
router.post("/posts", verifyToken, addPost);

//route for editing a single post
router.put("/posts/:id", verifyToken, editPost);

router.delete("/posts/:id", verifyToken, deletePost);

module.exports = router;
