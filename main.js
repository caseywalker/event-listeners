// console.log('CONNECTED');

const function1 = (user) => {
  return `Hello, ${user}`;
};

const function2 = function(user) {
  return `Goodbye, ${user}`;
};

const function3 = function(user, cb) {
  return cb(user);
};

console.log(function3('Casey', function2));
