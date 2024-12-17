"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/blog:

const blog = require("../controllers/blog");
const permissions = require("../middlewares/permissions");

// URL: /blogs

router
  .route("/")
  .get(permissions.isStaff, blog.list)
  .post(permissions.isAdmin, blog.create);

router
  .route("/:id")
  .get(permissions.isStaff, blog.read)
  .put(permissions.isAdmin, blog.update)
  .patch(permissions.isAdmin, blog.update)
  .delete(permissions.isAdmin, blog.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
