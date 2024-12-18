"use strict";

const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/notification:

const notification = require("../controllers/notification");
const permissions = require("../middlewares/permissions");

// URL: /notifications

router.route("/").get(notification.list).post(notification.create);

router
  .route("/:id")
  .get(notification.read)
  .put(notification.update)
  .patch(notification.update)
  .delete(notification.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
