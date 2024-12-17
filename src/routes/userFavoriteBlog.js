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

router
  .route("/")
  .get(permissions.isStaff, userFavoriteBlog.list)
  .post(permissions.isAdmin, userFavoriteBlog.create);

router
  .route("/:id")
  .get(permissions.isStaff, userFavoriteBlog.read)
  .put(permissions.isAdmin, userFavoriteBlog.update)
  .patch(permissions.isAdmin, userFavoriteBlog.update)
  .delete(permissions.isAdmin, userFavoriteBlog.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
