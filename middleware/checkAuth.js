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
<<<<<<< HEAD
    res.redirect("/dashboard");
  },
=======
    res.redirect("/reminders");
  },
  // isAdmin: function (req, res, next) {
  //   if (req.isAuthenticated()) {
  //     if (req.user.role == "admin") {
  //       return next();
  //     }
  //   }
  //   res.redirect("/reminders");
  // },
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e
};
