"use strict";

const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/token:

const token = require("../controllers/token");
const permissions = require("../middlewares/permissions");

// URL: /categories

router.route("/").get(token.list).post(token.create);

router
  .route("/:id")
  .get(token.read)
  .put(token.update)
  .patch(token.update)
  .delete(token.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
