// console.log('CONNECTED');

// const firstObj = {};

// const user = {
//   username: 'biz.markie',
//   password: 'abc123',
//   lovesJavascript: true,
//   favoriteNumber: 28,
// };

// DOT NOTATION
// console.log(user.lovesJavascript);
// console.log(user.username);

// Bracket Notations 
// console.log(user['password']);
// console.log(user['favoriteNumber']);
// console.log(user.favoriteNumber);

// Assigning Values

const newUser = {
  isNew: true,
};

// newUser.username = 'fresh.prince'; // Dot Notation
// newUser['password'] = 'abcd1234'; // Bracket Notation 

// console.log(newUser);
// Method Creation 
const newObject = { 
  username: 'Casey',
  sayHello: function () {
    console.log(`${this.username} says Hello!`)
  },
};

// newObject.username = 'Obi-Wan';
// newObject.sayHello();

// Iterate Over an Object 

const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
};

for (let key in userTwo) {
  console.log(key)
  console.log(userTwo[key])
  // console.log(userTwo.key) <- Doesn't work. No dot notation
}
