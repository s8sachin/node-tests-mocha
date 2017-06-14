//npm test or nodemon --exec 'npm test' or npm run test-watch

const expect = require('expect');
const utils = require('./utils')

it ('Should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
  // if (res !== 44){
  //   throw new Error(`Expected 44, but got ${res}.`);
  // }
});

it('Should Async Add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it ('Should square a number', () => {
  var res = utils.square(20);
  expect(res).toBe(400).toBeA('number');
});

it('Should Async square a number', (done) => {
  utils.asyncSquare(4, (sum) => {
    expect(sum).toBe(16).toBeA('number');
    done();
  });
});

//assert it includes first and lastname with proper values
it('Should verify first and last names are set', () => {
  var user = {location: "mysore", age: '23'};
  var res = utils.setName(user, "Sachin Srinivasan");
  // expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: "Sachin",
    lastName: "Srinivasan"
  });
});

// for refernce
it('Should expect some values', () => {
  // expect(12).toNotBe(11);
  // expect({name: "sachin"}).toEqual({name: "sachin"}); //comparing objects
  // expect([2, 3, 6]).toInclude(2);
  expect({
    name: "sach",
    age: 23,
    location: "mysore"
  }).toInclude({
    age: 23
  })
});
