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

router.route("/").get(comment.list).post(comment.create);

router
  .route("/:id")
  .get(comment.read)
  .put(comment.update)
  .patch(comment.update)
  .delete(comment.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
