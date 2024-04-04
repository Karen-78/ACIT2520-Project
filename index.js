<<<<<<< HEAD


=======
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e
const express = require("express");
const app = express();//this is our web server
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const passport = require("./middleware/passport");
const authRoute = require("./routes/authRoute");
const indexRoute = require("./routes/indexRoute");
const { ensureAuthenticated } = require("./middleware/checkAuth");

const session = require("express-session");

const FileStore = require('session-file-store')(session);
const fileStoreOptions = {}; 

const passport = require("./middleware/passport");
const session = require("express-session");



app.use(express.static(path.join(__dirname, "public")));
//this code is going to tell express to look for a folder called public
//Whenever the browser is requesting some file, go look in this public folder to see if that file exists

app.use(express.urlencoded({ extended: false }));//By adding this line of code, Express now has the ability to be able to get content that a user types into user inputs

app.use(ejsLayouts);

<<<<<<< HEAD
app.set("view engine", "ejs");//this line make us must have a folder called views, ejs is a template engine
=======

app.set("view engine", "ejs");
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore(fileStoreOptions),
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
<<<<<<< HEAD
app.get("/reminders", reminderController.list);//case2:users goes to localhost:3001/reminders,show a list of reminders,it will call the list function in reminder_controller.js
app.get("/reminder/new", reminderController.new);//case3:users goes to localhost:3001/reminder/new, show a create reminder page
app.get("/reminder/:id", reminderController.listOne);//case5:user wants to SEE an individual reminder.  :id means id is a dynamic value
app.post("/reminder/", reminderController.create);//case4:user sends(POST) new reminder data to us(creating a new reminder),here is /reminder, because the form action is"/reminder"
=======
// reminderController is from the file ./controller/reminder_controller
app.get("/reminders", reminderController.checkAdmin, reminderController.list); // when user goes to localhost:3001/reminders
app.get("/reminder/new", reminderController.new);
app.get("/reminder/:id", reminderController.listOne);
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e
app.get("/reminder/:id/edit", reminderController.edit);
// ⭐ Implement these two routes below!
app.post("/reminder/update/:id", reminderController.update);//case 7:user click the edit button, and expected to update the reminder
app.post("/reminder/delete/:id", reminderController.delete);//case 8:user click the delete button, and expected to delete the reminder

// 👌 Ignore for now
app.get("/register", authController.register);
app.get("/auth/login", authController.login);
app.post("/register", authController.registerSubmit);
app.post("/auth/login", authController.loginSubmit);

app.get("/admin", ensureAuthenticated,  (req, res) => {
  const sessionId = req.sessionID;
  const store = req.sessionStore;
  res.render("admin", {
    sessionId: sessionId,
    userID: req.user.id,
    user: req.user,
    allSessions: store.all(error, sessionId)
    // storeAll: store.all
  });
  // console.log(allSessions)
});

app.listen(3001, function () {
  console.log(
    "Server running. Visit: http://localhost:3001/reminders in your browser 🚀"
  );
});

<<<<<<< HEAD

// previous code
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  console.log(`User details are: `);
  console.log(req.user);

  console.log("Entire session object:");
  console.log(req.session);

  console.log(`Session details are: `);
  console.log(req.session.passport);
  next();
});

=======
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e
