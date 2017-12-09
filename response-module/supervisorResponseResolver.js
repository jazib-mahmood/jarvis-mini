var exports = module.exports = {};
const requestify = require('requestify');
const timesheetReviewsModel = new require('./timesheetResponseModel').TimesheetResponseModel();

exports.resolveResponse = function(messageFromUser){
    if(messageFromUser.includes('hi')){
        response = 'hey';
    }
    else if(messageFromUser.includes('approve')){
        requestify.get('http://clickchain.ourtimesheet.com:8080/timesheets/review-jarvis',timesheetReviewsModel).then(function(response) {
            // Get the response body
            response.getBody();
        });
    }
    else{
        response = 'idk what you saying man';
    }
     return response;
};