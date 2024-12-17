"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/comment:

const comment = require("../controllers/comment");
const permissions = require("../middlewares/permissions");

// URL: /comments

router
  .route("/")
  .get(permissions.isStaff, comment.list)
  .post(permissions.isAdmin, comment.create);

router
  .route("/:id")
  .get(permissions.isStaff, comment.read)
  .put(permissions.isAdmin, comment.update)
  .patch(permissions.isAdmin, comment.update)
  .delete(permissions.isAdmin, comment.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
