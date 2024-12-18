"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/userFavoriteBlog:

const userFavoriteBlog = require("../controllers/userFavoriteBlog");
const permissions = require("../middlewares/permissions");

// URL: /categories

router.route("/").get(userFavoriteBlog.list).post(userFavoriteBlog.create);

router
  .route("/:id")
  .get(userFavoriteBlog.read)
  .put(userFavoriteBlog.update)
  .patch(userFavoriteBlog.update)
  .delete(userFavoriteBlog.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
