const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");

router.get("/", (req, res) => {
  res.send("welcome");
});

// ensure only logged in users can see reminders
router.get("/reminders", ensureAuthenticated, (req, res) => {
  res.render("reminder/index", {
    user: req.user,
    isAuthenticated: req.isAuthenticated()
  });
});

// ensure only logged in users can create reminders
router.get("/reminder/new", ensureAuthenticated, (req, res) => {
  res.render("reminder/create", {
    user: req.user,
    isAuthenticated: req.isAuthenticated()
  });
});

// ensure only logged in users can see reminders
// router.get("/admin", ensureAuthenticated, (req, res) => {
//   res.render("admin", {
//   });
// });

module.exports = router;
