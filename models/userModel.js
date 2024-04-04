<<<<<<< HEAD
const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
=======
// const database = [
//   {
//     id: 1,
//     name: "Jimmy Smith",
//     email: "jimmy123@gmail.com",
//     password: "jimmy123!",
//   },
//   {
//     id: 2,
//     name: "Johnny Doe",
//     email: "johnny123@gmail.com",
//     password: "johnny123!",
//   },
//   {
//     id: 3,
//     name: "Jonathan Chen",
//     email: "jonathan123@gmail.com",
//     password: "jonathan123!",
//   },
//   {
//     id: 4,
//     name: "cindy Doe",
//     email: "cindy123@gmail.com",
//     password: "cindy123!",
//     title: "Grocery shopping",
//     description: "Buy milk and bread from safeway",
//     completed: false,
//   },
// ];

let database = [
  {
    id: 1,
    name: "Cindy Doe",
    email: "cindy123@gmail.com",
    password: "cindy123!",
    role: "regular",
    reminders: [
      {
        id: 1,
        title: "Grocery shopping",
        description: "Buy milk and bread from safeway",
        completed: false,
      },
    ],
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
<<<<<<< HEAD
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
  },

];
=======
    role: "admin",
    reminders: [
      {
        id: 1,
        title: "biking",
        description: "stanley park",
        completed: false,
      },
    ],
  }
]

// let database = [
//   {
//     id: 1,
//     name: "cindy Doe",
//     email: "cindy123@gmail.com",
//     password: "cindy123!",
//     reminders: [
//       {
//         title: "Grocery shopping",
//         description: "Buy milk and bread from safeway",
//         completed: false,
//       }
//     ]
//   }
// ]

// let Database = {
//   cindy: {
//     reminders: [
//       {
//         id: 1,
//         title: "Grocery shopping",
//         description: "Buy milk and bread from safeway",
//         completed: false,
//       },
//     ],
//   },
// };

>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
<<<<<<< HEAD
  // checkGithub: (profile) => {
  //   const user = database.find((user) => user.id === id);
  //   if (user) {
  //     return user;
  //   }
  //   throw new Error(`Couldn't find user with email: ${profile.emails[0].value}`);
  // }
};

module.exports = { database, userModel };
=======
};



module.exports = { database, userModel };
>>>>>>> cb9a79db9f42ccf82e2e6a099a655434bd14f83e
