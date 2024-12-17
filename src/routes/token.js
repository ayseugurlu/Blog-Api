"use strict";

const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/token:

const token = require("../controllers/token");
const permissions = require("../middlewares/permissions");

// URL: /categories

router
  .route("/")
  .get(permissions.isStaff, token.list)
  .post(permissions.isAdmin, token.create);

router
  .route("/:id")
  .get(permissions.isStaff, token.read)
  .put(permissions.isAdmin, token.update)
  .patch(permissions.isAdmin, token.update)
  .delete(permissions.isAdmin, token.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
