var exports = module.exports = {};

exports.resolveResponse = function(messageFromUser){
    if(messageFromUser.includes('hi')){
        response = 'hey';
    }
    else{
        response = 'idk what you saying man';
    }
     return response;
};