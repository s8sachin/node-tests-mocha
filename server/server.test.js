//supertest for requests
const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

//server
  // GET / 
    // some test case
  // GET /users
    // some test case

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect((res) => {
          expect(res.body).toInclude({
            error: "page not found"
          });
        })
        .expect(404)
        .end(done);
    });
  });

  describe('GET /users', () => {
      it('should return array of users and check perticular user name', (done) => {
        request(app)
          .get('/users')
          .expect((res) => {
            expect(res.body).toInclude({
              name: "sachin",
              age: 23
            });
          })
          .expect(200)
          .end(done);
      });
  });
});

// samples

// it('should return hello world response', (done) => {
//   request(app)
//     .get('/')
//     .expect({
//       error: "page not found"
//     })
//     .expect(404)
//     .end(done);
// });
