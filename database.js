// const database = [
//   {
//     id: 1,
//     name: "Cindy",
//     title: "Grocery shopping",
//     description: "Buy milk and bread from safeway",
//     completed: false,
//   },
// ];


// module.exports = database;


let Database = {
  cindy: {
    reminders: [
      {
        id: 1,
        title: "Grocery shopping",
        description: "Buy milk and bread from safeway",
        completed: false,
      },
    ],
  },
};
//this database is not a array,if you change this to array,it will more easier
//let database=[{email:"",password:"",reminders:[]},{email:"",password:"",reminders:[]}
module.exports = Database;


