var expect  = require('chai').expect;
var assert = require('assert');
var request = require('request');
const Card = require('../models/card');

var testData = new Card({
  title: "Test",
  color: "Orange",
  image: "https://www.southernliving.com/thmb/WHH7cdFT3YMJlJN4y7y3lsAKvJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-114166947-1-268128f97e5c415baede328c1fe32f55.jpg",
  description: "Random Data"
});

describe("Test Database for Cards", function () {
  var url = "http://localhost:3000/api/cards";
  it("Saved a new Card in database", function (done) {
    request.post(
      { url: url, form: testData },
      function (error, response, body) {
        console.log("Response body:", body);
        let parsedBody = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(parsedBody.message).to.equal("Card added successfully");
        done();
      }
    );
  });
});

describe('Retrieve Cards', function() {
  it('Retrieve all cards from the database', function(done) {
    var url = "http://localhost:3000/getCards";
    request.get(url, function(error, response, body) {
      if (error) {
        console.error('Request error:', error);
        done(error);
      } else {
        const adopters = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(adopters).to.be.an('array');
        done();
      }
    });
  });
});