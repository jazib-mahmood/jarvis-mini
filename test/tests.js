var expect  = require('chai').expect;
var responseEvaluator = require('./../response-module/responses.js');

it('Main page content', function(done) {
   expect (responseEvaluator.getResponse('hi')).to.equal('hey')
    done();
});

it('Main page content', function(done) {
    expect (responseEvaluator.getResponse('Whatsup')).to.equal('idk what you saying man')
     done();
 });

