mvar expect  = require('chai').expect;
var request = require('request');

describe('Status and content', function() {
  describe ('Main page', function() {
    it('status', function(){
	request('http://localhost:8082/', function(error, response, body) {
		expect(response.statusCode).to.equal(200);
	});
    });

    it('content', function() {
        request('http://localhost:8082/' , function(error, response, body) {
		expect(body).to.equal('Hello World');
	});
    });
  });

  describe ('About page', function() {
     it('status', function(){
	request('http://localhost:8082/about', function(error, response, body) {
	        expect(response.statusCode).to.equal(404);
	});
     });

   });
});
