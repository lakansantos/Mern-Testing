const mongoose = require("mongoose");
const User = require("./usersModel");
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);
postSchema.index({ title: "text", message: "text" });
module.exports = mongoose.model("Post", postSchema);
