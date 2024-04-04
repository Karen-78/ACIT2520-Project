Breakdown of work:
April 3rd (First Sprint Complete)
Yue Li:
I worked on the following tasks:
1.  
```
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


  }
```
This task is responsible for reminderController.update functionality.
2. 
```
delete: (req, res) => {
    let reminderToDeleteId = req.params.id;

    let reminderIndex = database.cindy.reminders.findIndex(reminder => reminder.id == reminderToDeleteId);
    if (reminderIndex !== -1) {
      database.cindy.reminders.splice(reminderIndex, 1);
      //delete the value which the index = reminderIndex,quantity = 1
      res.redirect("/reminders");
    }



  }
```
This task is responsible for reminderController.delete functionality.


I also watched 3 videos you posted in LMS:
1.https://www.youtube.com/watch?v=NvHOM_RhObI
2.https://www.youtube.com/watch?v=5e4BK9DnFxo&t=4s
3.https://www.youtube.com/watch?v=huNbTKPv7Z0&t=1095s

I also de-bug an error:
1. After I copy and paste the certain code from "the passportcode", it throws some error like "you need the "express-session" module"
    (1) The reason: I am trying to use the Passport middleware before setting the session
    (2) Soluton: I put the code below on top of `app.use(passport.session());`
    ```
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
```

