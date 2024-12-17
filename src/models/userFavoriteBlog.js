"use strict";

const { mongoose } = require("../configs/dbConnection");

const UserFavoriteBlogsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    isLiked: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "userFavoriteBlogs",
    timestamps: true,
  }
);

module.exports = mongoose.model("UserFavoriteBlog", UserFavoriteBlogsSchema);
