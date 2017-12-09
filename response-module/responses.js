var exports = module.exports = {};
var supervisorResponseResolver = require('./supervisorResponseResolver');

exports.getResponse = function(messageFromUser){
    return supervisorResponseResolver.resolveResponse(messageFromUser);
};