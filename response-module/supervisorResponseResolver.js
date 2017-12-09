var exports = module.exports = {};
const requestify = require('requestify');
const timesheetReviewsModel = new require('./timesheetResponseModel').timesheetResponseModel();
const userModel = new require('./userModel').userModel();

exports.resolveResponse = function(messageFromUser){
    if(messageFromUser.includes('hi')){
        responseMessage = 'hey';
    }
    else if(messageFromUser.includes('approve')){
        responseMessage = 'approve';
        requestify.get('http://clickchain.ourtimesheet.com:8080/timesheets/review-jarvis',timesheetReviewsModel).then(function(response) {
            // Get the response body
            response.getBody();
        });
    }
    else if(messageFromUser.includes('clockin')){
        responseMessage = 'clockin';
        requestify.post('http://clickchain.ourtimesheet.com:8080/webclock/punch/in', userModel).then(function(response) {
            // Get the response body
            response.getBody();
        });
    }
    else if(messageFromUser.includes('clockout')){
        requestify.post('http://clickchain.ourtimesheet.com:8080/webclock/punch/out', userModel).then(function(response) {
            // Get the response body
            response.getBody();
        });
    }
    else{
        responseMessage = 'idk what you saying man';
    }
     return responseMessage;
};