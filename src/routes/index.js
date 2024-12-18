"use strict";

const router = require("express").Router();

//Routes:

// URL: /

// auth:
router.use("/auth", require("./auth"));
// user:
router.use("/users", require("./user"));
// token:
router.use("/tokens", require("./token"));

//blog:
router.use("/blogs", require("./blog"));
//comment:
router.use("/comments", require("./comment"));
//category:
router.use("/categories", require("./category"));
//notification:
router.use("/notifications", require("./notification"));
//userfavoriteBlog:
router.use("/userfavoriteblogs", require("./userFavoriteBlog"));

// document:
router.use("/documents", require("./document"));

module.exports = router;
