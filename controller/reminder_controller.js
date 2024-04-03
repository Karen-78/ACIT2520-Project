let model = require("../models/userModel");

let remindersController = {
  list: (req, res) => { // returns a list of the user's reminders
    res.render("reminder/index", { reminders: req.user.reminders });
  },

  new: (req, res) => { // to create new reminder
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: req.user.reminders });
    }
  },

  create: (req, res) => {
    let reminder = {
      id: req.user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
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
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    // implementation here 👈
    let reminderToFind = req.params.id;
    // change "database.cindy" to req.user (don't hard-code it)
    let searchResult = req.user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });

    console.log(searchResult)

    // if (searchResult != undefined) {
        // Directly update the reminder at the found index
        // searchResult.reminders.forEach(function(eachItem) {
        //   eachItem.title = req.body.title;
        //   eachItem.description = req.body.description;
        //   eachItem.completed = req.body.completed;
        // })
        searchResult.title = req.body.title;
        searchResult.description = req.body.description;
        searchResult.completed = req.body.completed === 'on' || req.body.completed === 'true';
        res.redirect("/reminders");
    // } else {
    //     res.status(404).send("Reminder not found");
    // }
  },


  // update: (req, res) => {
  //   // implementation here 👈
  //   let reminderToFind = req.params.id;
  //   // change "database.cindy" to req.user (don't hard-code it)
  //   let searchResult = req.user.reminders.find(function(reminder) {
  //     return reminder.id === reminderToFind;
  //   });

  //   if (searchResult != undefined) {
  //       // Directly update the reminder at the found index
  //       searchResult.reminders.title = req.body.title;
  //       searchResult.reminders.description = req.body.description;
  //       searchResult.reminders.completed = req.body.completed === 'on' || req.body.completed === 'true'; // Handling boolean based on form input

  //       res.redirect("/reminders");
  //   } else {
  //       res.status(404).send("Reminder not found");
  //   }
  // },


//   let reminderToFind = req.params.id;
//   let searchResult = req.user.reminders.find(function (reminder) {
//     return reminder.id == reminderToFind;
//   });
//   if (searchResult != undefined) {
//     res.render("reminder/single-reminder", { reminderItem: searchResult });
//   } else {
//     res.render("reminder/index", { reminders: req.user.reminders });
//   }
// },

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
      res.redirect("/reminders")
    }
  },

  admin: (req, res) => {

  },
}

module.exports = remindersController;

