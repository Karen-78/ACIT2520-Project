let model = require("../models/userModel");

let remindersController = {
<<<<<<< HEAD
  list: (req, res) => {
    // const user = req.user;
    console.log(req.user)// can see the currently login user
    //  if (req.user.role=="admin"){res.redirect("/admin")}
    res.render("reminder/index", { reminders: database.cindy.reminders });//here is only cindy, but after you login,it should be the user's name
  },//render really just means take this file and draw it onto the browser screen// it will find the ejs file in views folder
=======
  list: (req, res) => { // returns a list of the user's reminders
    res.render("reminder/index", { reminders: req.user.reminders });
  },
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e

  new: (req, res) => { // to create new reminder
    res.render("reminder/create");
  },

  listOne: (req, res) => {
<<<<<<< HEAD
    let reminderToFind = req.params.id;//here will find the dynamic id in URL,like /reminder/1,1 is the id
    let searchResult = database.cindy.reminders.find(function (reminder) {//Find will return the value(item or dictionary) of the first element in the list that satisfies some function that we give it
=======
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: req.user.reminders });
    }
  },

  create: (req, res) => {
    // let data= req.body;
    // console.log(data)//you will get: { title: 'hi', description: 'hi again' },title and description are the "name" of the input
    let reminder = {
<<<<<<< HEAD
      id: database.cindy.reminders.length + 1,
      title: req.body.title,//hi
      description: req.body.description,//hi again
      completed: false,
    };
    database.cindy.reminders.push(reminder);//database.cindy.reminders is a list
    res.redirect("/reminders");//this page is a list of the whole reminders
=======
      id: req.user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
      
    };
    req.user.reminders.push(reminder);
    res.redirect("/reminders");
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
<<<<<<< HEAD
    let searchResult = database.cindy.reminders.find(function (reminder) {
      //find will return the first element in the provided array that satisfies the provided testing function
=======
    // change "database.cindy" to req.user (don't hard-code it)
    let searchResult = req.user.reminders.find(function (reminder) {
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e
      return reminder.id == reminderToFind;
      //if reminderToFind= i, will get {id: 1,title: "Grocery shopping", description: "Buy milk and bread from safeway",completed: false}
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    let reminderToUpdateId = req.params.id;
    let reminderIndex = database.cindy.reminders.findIndex(reminder => reminder.id == reminderToUpdateId);
    if (reminderIndex !== -1) {//means we have found the reminder(index>=0)
      database.cindy.reminders[reminderIndex].title = req.body.title;
      database.cindy.reminders[reminderIndex].description = req.body.description;
      if (req.body.completed === "true") {
        database.cindy.reminders[reminderIndex].completed = true;
      } else {
        database.cindy.reminders[reminderIndex].completed = false;
      }
      res.redirect("/reminders");
    }

    // implementation here 👈
    let reminderToFind = req.params.id;
    // change "database.cindy" to req.user (don't hard-code it)
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });

    console.log(searchResult)
        searchResult.title = req.body.title;
        searchResult.description = req.body.description;
        searchResult.completed = req.body.completed === 'on' || req.body.completed === 'true';
        res.redirect("/reminders");
  },

  delete: (req, res) => {
<<<<<<< HEAD
    let reminderToDeleteId = req.params.id;

    let reminderIndex = database.cindy.reminders.findIndex(reminder => reminder.id == reminderToDeleteId);
    if (reminderIndex !== -1) {
      database.cindy.reminders.splice(reminderIndex, 1);
      //delete the value which the index = reminderIndex,quantity = 1
      res.redirect("/reminders");
    }


    // implementation here 👈
=======
      // implementation here 👈
      let reminderToFind = req.params.id;
      // change "database.cindy" to req.user (don't hard-code it)
      let searchResult = req.user.reminders.findIndex(function (reminder) {
        return reminder.id == reminderToFind;
      });
      req.user.reminders.splice(searchResult,1);
      res.redirect("/reminders");
    },
  
  checkAdmin: (req, res) => {
    let userRole = req.user.role

    if (userRole === "admin") {
      res.redirect("/admin")
    } else {
      res.redirect("/reminders")
    }
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e
  },

  admin: (req, res) => {
    // Access the session store from the request object
    const sessions = req.sessionStore.sessions;

    // Initialize an array to hold session information
    const sessionInfoList = [];

    // Iterate over the sessions object
    for (const sessionId in sessions) {
      // Get the session data for the current session ID
      const sessionData = JSON.parse(sessions[sessionId]);

      // Extract relevant information such as session ID and user name
      const sessionInfo = {
        sessionId: sessionId,
        userName: sessionData.passport ? sessionData.passport.user.username : "Unknown"
      };

      // Push session information into the array
      sessionInfoList.push(sessionInfo);
    }

    // Now sessionInfoList contains an array of objects, each containing session ID and user name
    console.log("infolist:", sessionInfoList);

    // Render the admin view after retrieving sessions
    res.render("admin", {
      sessionIdsList: sessionInfoList, user: req.user
    });
  },
  
  destroySession: (req, res) => {
    const sessionId = req.params.sessionId;

    req.sessionStore.destroy(sessionId, function(err) {
      if (err) {
        console.error('Error destroying session:', err);
        res.status(500).send({ error: 'Failed to destroy session' });
      } else {
        console.log('Session destroyed successfully');
        res.redirect('/admin');
      }

    });
  },

}

module.exports = remindersController;

