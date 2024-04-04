const userModel = require("../models/userModel").userModel;


const getUserByEmailIdAndPassword = (email, password) => {
  let user = userModel.findOne(email);
  //i.e.{id: 1, name: "Jimmy Smith",email: "jimmy123@gmail.com",password: "jimmy123!"}
  if (user) {
    if (isUserValid(user, password)) {
      return user;

    }
  }
  return null;
};
const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

function isUserValid(user, password) {
  return user.password === password;
}

module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
};
