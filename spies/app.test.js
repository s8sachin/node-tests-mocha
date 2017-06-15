const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe("App", () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('Should call spy correctly', () => {
    var spy = expect.createSpy();
    spy('Sachin', 23);
    expect(spy).toHaveBeenCalledWith('Sachin', 23);
  });

  it('should call saveUser with user object', () => {
    var email = 'sachin@example.com';
    var password = "123abc";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});