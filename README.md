## Notes on how to use this app: 
- Johnny is an admin (email: johnny123@gmail.com  password: johnny123!)
- The admin page is at /admin 
- Cindy is a regular user

# Breakdown of work:
## March 28 -April 4 (First Sprint)  
### Yue Li：  
- I watched 3 videos you posted in LMS:
    - https://www.youtube.com/watch?v=NvHOM_RhObI
    - https://www.youtube.com/watch?v=5e4BK9DnFxo&t=4s
    - https://www.youtube.com/watch?v=huNbTKPv7Z0&t=1095s  
- Updating a reminder completed: This task is responsible for reminderController.update functionality
- Deleting a reminder completed: This task is responsible for reminderController.delete functionality.
- Debug an error:
    - After I copy and paste the certain code from "the passportcode", it throws some error like "you need the "express-session" module"
    - The reason: I am trying to use the Passport middleware before setting the session
    - Solution: I put related code on top of `app.use(passport.session());`  

### Karen Yan: 
I worked on the following tasks: 
- Completed the "Edit" and "Delete" reminder tasks. 
- Incorporated the Passport Lab login screen into the Reminder App. 
    - Copied the relevant code from the passport lab to this lab. 
    - Now only logged-in users can see their own reminders and only logged in users can create reminders. 
    - Logged in users can only see and edit their own reminders, not other users
- Incorporated a screen to revoke session. 
    - Users now have sessions made when they log in.
    - Right now, the logged in user can only see their own session and can revoke it. Still working to fix this.
    - Tried to add store.all() but was not able to. It did not work as expected (something about .all() is not a function)
- Tried to incorporate the logout button and option but was unsuccessful.
 
I researched about the following things: 
- Watched and took notes on "Understanding our Term Project Start Code Part 1"
- Watched and took notes on "Understanding our Term Project Start Code Part 2"
- Watched and took notes on "Understanding our Term Project Start Code Part 3"
- Searched express-session npm, Google, Github, reddit, and many other sites on how to user store.all() to see all sessions for admin to revoke it. Was unable to find a working version. I tried session.all(), SessionStore.all(), and a bunch of other options I saw on the internet. But nothing worked. Not sure why that is, and I am consulting with classmates to see if they have the same issue. 
- Watched and took notes on Passport Lecture (Week 11)
- Took time to understand where files are kept in the template file, what what is written on the different files. Trying to stay consistent with the sturcture so it is cleaner and easier to understand. 

## April 4- April 11(second sprint)  
### Yue Li:
- I watched the following videos again:
    - Passport Lecture
- I intergrated passport authentication into our project
    - copy and paste all functions and packages from original passport assignment
    - users can login using email and password, for example: johnny123@gmail.com
    - modified the reminderController to make it show user's reminder, not only cindy's
    - authticated users are able to see and change their own reminders, but can't see others
    - modified the code to let user edit, add, delete the reminders
    - tried to make the admin session 

### Karen Yan: 
I worked on the following tasks: 
- Finally got Admin page to work with store.all()
- Admin page lists sessions 
- Added the revoke button to admin page
- Added the Logout function
- Fixed the /login to /auth/login 
- Added the lock image to the login page

I researched about the following things: 
- Researched how to implement store.all() 
- Spent several days figuring out why store.all() would not work. Finally realized it's because I had a line of conflicting code. After I commented that out, it worked as expected. 
- Looked through the passport lab template to understand it better and see which features I could copy into the reminder app. 
- Researched how to add the logout function by reading through the passport lab. 
- Researched how to revoke specified session (spent a really long time figuring out how to list the session id since it's not saved in the database)


## Apr 12 - 18 (Third Sprint)
### Yue Li:
- I completed the admin session to remotely destroy a session
- I go through the entire project, add more comments to make it easier to understand

### Karen Yan: 
I worked on the following tasks: 
- Added the feature that users not logged-in cannot see the nav bar by adding an if statement in the ejs 
- Added the lock image on the login page. Tried to center the image but couldn't do it. I tried to change the login.ejs and layout.ejs with no success
- Implemented the image banner when viewing individual reminders. 

I researched about the following things: 
- How to resolve several merge conflicts on Github. Ended up overwriting everything and to start over.
- Looked at how to implement Unsplash by looking at their website. 
- Had trouble listing the "banner" value from the database. It kept showing undefined. 
- Spend a few hours looking into node-fetch (https://www.npmjs.com/package/node-fetch) and how to import it properly because I forgot it's already installed. Spent a long time trying the different import methods and searching online how to do it (it kept saying it could not use the "import" method but also wouldn't accept the "require" method either.)

Thank you professor for being so kind and supportive! I learned a lot in your class :) 

## Criteria: 
```
[ x ] breakdown of work 
[ x ] passport local auth
[ x ] admin functionality 
    [ x ] lists all sessions
    [ x ] revoke session
[ x ] view, edit, delete reminders for logged in user
[ x ] hide nav bar if not logged in 
[ x ] add banner image 
```