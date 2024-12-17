"use strict";

const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/user:

const user = require("../controllers/user");
const permissions = require("../middlewares/permissions");

// URL: /users

router
  .route("/")
  .get(permissions.isStaff, user.list)
  .post(permissions.isAdmin, user.create);

router
  .route("/:id")
  .get(permissions.isStaff, user.read)
  .put(permissions.isAdmin, user.update)
  .patch(permissions.isAdmin, user.update)
  .delete(permissions.isAdmin, user.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
