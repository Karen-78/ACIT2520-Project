let database = require("../database");

let remindersController = {
  list: (req, res) => {
    // const user = req.user;
    console.log(req.user)// can see the currently login user
    //  if (req.user.role=="admin"){res.redirect("/admin")}
    res.render("reminder/index", { reminders: database.cindy.reminders });//here is only cindy, but after you login,it should be the user's name
  },//render really just means take this file and draw it onto the browser screen// it will find the ejs file in views folder

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;//here will find the dynamic id in URL,like /reminder/1,1 is the id
    let searchResult = database.cindy.reminders.find(function (reminder) {//Find will return the value(item or dictionary) of the first element in the list that satisfies some function that we give it
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    // let data= req.body;
    // console.log(data)//you will get: { title: 'hi', description: 'hi again' },title and description are the "name" of the input
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,//hi
      description: req.body.description,//hi again
      completed: false,
    };
    database.cindy.reminders.push(reminder);//database.cindy.reminders is a list
    res.redirect("/reminders");//this page is a list of the whole reminders
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      //find will return the first element in the provided array that satisfies the provided testing function
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
  },

  delete: (req, res) => {
    let reminderToDeleteId = req.params.id;

    let reminderIndex = database.cindy.reminders.findIndex(reminder => reminder.id == reminderToDeleteId);
    if (reminderIndex !== -1) {
      database.cindy.reminders.splice(reminderIndex, 1);
      //delete the value which the index = reminderIndex,quantity = 1
      res.redirect("/reminders");
    }


    // implementation here 👈
  },
};

module.exports = remindersController;
