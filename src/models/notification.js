"use strict";

const { mongoose } = require("../configs/dbConnection");

const NotificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required,
    },

    notificationTyp: {
      type: String,
      enum: ["like", "comment", "share", "newBlog"],
    },

    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      default: null,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "notifications",
    timestamps: true,
  }
);

module.exports = mongoose.model("Notification", NotificationSchema);
