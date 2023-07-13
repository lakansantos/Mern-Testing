const Post = require("../models/postsModel");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/environment");
//get all posts

const getAllPosts = async (req, res) => {
  try {
    const userId = req.userId;
    const { search, offset = 1, limit = 5 } = req.query;

    const regexPattern = new RegExp(search, "i");

    const startIndex = (offset - 1) * limit;
    // const totalRows = await Post.countDocuments({ userId });

    let query = search
      ? { title: { $regex: regexPattern }, userId }
      : { userId };

    const [totalRows, posts] = await Promise.all([
      Post.countDocuments(query),
      Post.find(query)
        .skip(startIndex)
        .limit(parseInt(limit))
        .sort({ createdAt: "desc" }),
    ]);

    const totalPages = Math.ceil(totalRows / limit);

    res.status(200).json({
      data: posts,
      meta: {
        offset: offset,
        totalRows: totalRows,
        limit: limit,
        totalPages,
      },
    });
  } catch (error) {
    res.status(400).json({ mssg: error });
  }
};

//get a single post

const getSinglePost = async (req, res) => {
  const { id } = req.params;

  try {
    const singlePost = await Post.findById(id);
    if (!singlePost) {
      res.status(404).json({
        mssg: "No posts found",
      });
    } else {
      res.status(200).json({
        data: singlePost,
      });
    }
  } catch (error) {
    res.status(400).json({ mssg: error.message });
  }
};

//add post

const addPost = async (req, res) => {
  const { title, message } = req.body;

  try {
    const post = await Post.create({ title, message, userId: req.userId });
    console.log(req.userId);
    if (!post) {
      res.status(400).json({
        mssg: "No post found!",
      });
    } else {
      res.status(200).json({ data: post });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//edit post

const editPost = async (req, res) => {
  const { title, message } = req.body;
  try {
    const editedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, message },
      { new: true }
    );

    if (!editedPost) {
      res.status(404).json({ mssg: "Post not found" });
    } else {
      res.status(200).json({ mssg: "Successfully edited the post" });
    }
  } catch (error) {
    res.status(400).json({ mssg: "Something went wrong" });
  }
};

//delete post
const deletePost = async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id, {
      new: true,
    });

    if (!deletePost) {
      res.status(404).json({ mssg: "Post not found" });
    } else {
      res.status(200).json({ mssg: "Successfully deleted a post" });
    }
  } catch (error) {
    res.status(400).json({ mssg: "Sometging went wrong!" });
  }
};

const searchPost = async (req, res) => {
  try {
    const { q } = req.query;
    const userId = req.userId;
    const searchResults = await Post.find({ $text: { $search: q }, userId });

    res.status(200).json({ data: searchResults });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllPosts,
  getSinglePost,
  addPost,
  editPost,
  deletePost,
  searchPost,
};
