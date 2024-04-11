module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/auth/login");
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/reminders");
  },
  isAdmin: function (req, res, next) {
    if (req.isAuthenticated()) {
      if (req.user.role == "admin") {
        return next();
      } else {
        return res.status(403).send("Not authenticated.");
      }
    } 
  },
};
