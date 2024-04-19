let model = require("../models/userModel");

async function fetchImage(keyword) {
  const imageUrl = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=ch7E6YVNJeMa4Lz5AZBHdnuMr6s8YiPD_KLaOwzlGlw`
  const response = await fetch(imageUrl);
  const body = await response.json();
  console.log(body.results[0].urls.small)
  return body.results[0].urls.small

}

let remindersController = {
  list: (req, res) => { // returns a list of the user's reminders
    res.render("reminder/index", { reminders: req.user.reminders, isAuthenticated: req.isAuthenticated() });
  },

  new: (req, res) => { // to create new reminder
    res.render("reminder/create", {isAuthenticated: req.isAuthenticated()});
  },
  
  listOne: async (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    console.log('banner:', searchResult.banner);
    let urlImage = await fetchImage(searchResult.banner)

    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult , isAuthenticated: req.isAuthenticated(), urlImage:urlImage});
    } else {
      res.render("reminder/index", { reminders: req.user.reminders, isAuthenticated: req.isAuthenticated(), user: req.user });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: req.user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      banner: req.body.banner,
      completed: false,
    };
    req.user.reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    // change "database.cindy" to req.user (don't hard-code it)
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult , isAuthenticated: req.isAuthenticated()});
  },

  update: (req, res) => {
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
      res.redirect("/login")
    }
  },

  admin: (req, res) => {
    const sessions = req.sessionStore.sessions;
    const sessionInfoList = [];

    for (const sessionId in sessions) {
      const sessionData = JSON.parse(sessions[sessionId]);

      const sessionInfo = {
        sessionId: sessionId,
        userName: sessionData.passport ? sessionData.passport.user.username : "Unknown"
      };

      sessionInfoList.push(sessionInfo);
    }

    console.log("infolist:", sessionInfoList);
    res.render("admin", {
      sessionIdsList: sessionInfoList, user: req.user, 
      isAuthenticated: req.isAuthenticated()
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

