const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("../controllers/userController");
const { database } = require("../models/userModel");
// const GithubStrategy = require("passport-github2").Strategy;


// // all we need to do 
// passport.use(new GithubStrategy(
//   {
//     clientID: "f9f021a41a65a3564728",
//     clientSecret: "ea2d90b8082f11311f3903f445a77a6c502b93c5",
//     callbackURL: "http://localhost:8000/auth/github/callback", // Your callback URL
//   },
//   function (accessToken, refreshToken, profile, done) {
//     console.log(profile);
//     // User.findOrCreate({ githubId: profile.id }, function (err, user) {
//     //   return done(err, user);
//     // });
//     process.nextTick(function () {

//       // To keep the example simple, the user's GitHub profile is returned to
//       // represent the logged-in user.  In a typical application, you would want
//       // to associate the GitHub account with a user record in your database,
//       // and return that user instead.g
//       const newUser = {
//         id: profile.id,
//         name: profile.displayName,
//       }
//       database.push(newUser)
//       return done(null, profile);
//     });
//   }

// ))

const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  //默认是username和password，如果你想用email和password，就要改成email和password
  //如果你就是用username和password，就不用写这个
  (email, password, done) => {
    const user = userController.getUserByEmailIdAndPassword(email, password);
    ////i.e.{id: 1, name: "Jimmy Smith",email: "jimmy123@gmail.com",password: "jimmy123!"}
    return user
      ? done(null, user)//if user是true，do this line ,done是一个function，第一个参数是error，第二个参数是user
      : done(null, false, {//false是说没有user
        message: "Your login details are not valid. Please try again",
      });
  }
);

// same as above--from return
// if(user){
//   done(null, user);
// }else{
//   done(null, false, { message: "Your login details are not valid. Please try again" });
// }

passport.serializeUser(function (user, done) {
  done(null, user.id);// just user without id is wrong, should store something will not change,ie id
});// will create a session 
//这里会被call when you login，这个function会create a session
//并且我们只存了user.id在session里面，这样可以减少session的size
//The session is our way of telling the server to remember who this user is
//也会create req.user={id: 1, name: "Jimmy Smith",email: "jimmy123@gmail.com",password: "jimmy123!"}

// you have to have these two functions
passport.deserializeUser(function (id, done) {
  //因为serializeUser只存了user.id在session里面，所以我们要用这个id来找到user
  let user = userController.getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});



module.exports = passport.use(localLogin);



//-------------server hard dirve
/*

session:{
  "sahjdahjsahda":{
    email：
  }
  "sahjdahjsahda"会存在cookie里面
}




*/


