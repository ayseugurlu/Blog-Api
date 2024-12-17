"use strict";

const { mongoose } = require("../configs/dbConnection");

const TokenSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    token: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
  },
  {
    collection: "tokens",
    timestamps: true,
  }
);

module.exports = mongoose.model("Token", TokenSchema);