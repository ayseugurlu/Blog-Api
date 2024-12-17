"use strict";

const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/notification:

const notification = require("../controllers/notification");
const permissions = require("../middlewares/permissions");

// URL: /notifications

router
  .route("/")
  .get(permissions.isStaff, notification.list)
  .post(permissions.isAdmin, notification.create);

router
  .route("/:id")
  .get(permissions.isStaff, notification.read)
  .put(permissions.isAdmin, notification.update)
  .patch(permissions.isAdmin, notification.update)
  .delete(permissions.isAdmin, notification.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
