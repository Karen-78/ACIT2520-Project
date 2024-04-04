const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");
const session = require("express-session");
const router = express.Router();

router.get("/auth/login", forwardAuthenticated, (req, res) => res.render("login"));

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/reminders",
    failureRedirect: "/auth/login",
  })
);

router.get("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/auth/login');
  });
});


router.get("/revoke", (req, res, next) => { // this is called when you click the logout button 
  req.session.destroy(function(err) {
    // cannot access session here
  })
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/auth/login');// when you click the logout button, you'll be redirected back to the login screen
  });
});


module.exports = router;
