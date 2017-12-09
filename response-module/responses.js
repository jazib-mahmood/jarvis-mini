var exports = module.exports = {};

exports.getResponse = function(messageFromUser){
    var response = '';
    if(messageFromUser.includes('hi')){
        response = 'hey';
    }
    else{
        response = 'idk what you saying man';
    }
     return response;
};