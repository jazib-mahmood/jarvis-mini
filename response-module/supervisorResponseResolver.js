var exports = module.exports = {};
const requestify = require('requestify');
const userModelCreator = require('./userModel');
const userModel = new userModelCreator.UserModel();
const timesheetReviewsModelCreator =require('./timesheetResponseModel');
const timesheetReviewModel = new timesheetReviewsModelCreator.TimesheetResponseModel();
exports.resolveResponse = function(messageFromUser){
    if(messageFromUser.includes('hi')){
        responseMessage = 'hey';
        return responseMessage;
    }
    else if(messageFromUser.includes('approve')){
        requestify.get('http://clickchain.hourtimesheet.com:8080/timesheets/review-jarvis', JSON.stringify(timesheetReviewModel)).then(function(response) {
            // Get the response body
            response.getBody();
            return responseMessage;
        });
    }
    else if(messageFromUser.includes('clockin')){
        responseMessage = 'clockin';
        requestify.post('http://clickchain.hourtimesheet.com:8080/webclock/punch/in', JSON.stringify(userModel)).then(function(response) {
            // Get the response body
            response.getBody();
            return responseMessage;
        });
    }
    else if(messageFromUser.includes('clockout')){
        requestify.post('http://clickchain.hourtimesheet.com:8080/webclock/punch/out', JSON.stringify(userModel)).then(function(response) {
            // Get the response body
            response.getBody();
            return responseMessage;
        });
    }
    else{
       return responseMessage = 'idk what you saying man';
    }
};