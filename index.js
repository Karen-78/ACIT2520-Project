const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const passport = require("./middleware/passport");
const authRoute = require("./routes/authRoute");
const indexRoute = require("./routes/indexRoute");
const { ensureAuthenticated, isAdmin } = require("./middleware/checkAuth");

const session = require("express-session");

// const FileStore = require('session-file-store')(session);
// const fileStoreOptions = {path: './sessions'}; 


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    // session: new FileStore(fileStoreOptions), // ??? idk
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.session());
app.use(passport.initialize());

app.use((req, res, next) => {
  console.log(`User details are: `);
  console.log(req.user);

  console.log("Entire session object:");
  console.log(req.session);

  console.log(`Session details are: `);
  console.log(req.session.passport);

  next();
});

app.use("/", indexRoute);
app.use("/auth", authRoute);
// app.use("/reminder", authRoute);

// Routes start here
// reminderController is from the file ./controller/reminder_controller
app.get("/reminders", reminderController.checkAdmin, reminderController.list); // when user goes to localhost:3001/reminders
app.get("/reminder/new", reminderController.new);
app.get("/reminder/:id", reminderController.listOne);
app.get("/reminder/:id/edit", reminderController.edit);
app.post("/reminder/", reminderController.create);
// ⭐ Implement these two routes below!
app.post("/reminder/update/:id", reminderController.update);
app.post("/reminder/delete/:id", reminderController.delete);
app.get("/admin", isAdmin, reminderController.admin);

// 👌 Ignore for now
app.get("/register", authController.register);
app.get("/auth/login", authController.login);
app.post("/register", authController.registerSubmit);
app.post("/auth/login", authController.loginSubmit);
app.get("/logout", authController.logout);

app.post("/destroy/:sessionId", reminderController.destroySession);



app.listen(3001, function () {
  console.log(
    "Server running. Visit: http://localhost:3001/reminders in your browser 🚀"
  );
});

