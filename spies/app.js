var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // check if email already exists
  db.saveUser({email, password});
  // save user to db
  // send the welcome email
}