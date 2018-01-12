const restify = require('restify');
const builder = require('botbuilder');
var responseEvaluator = require('./response-module/responses.js');

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
    console.log('%s listening to %s', server.name, server.url);
}); 

const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

server.post('/api/messages', connector.listen());

connector.listen()

var bot = new builder.UniversalBot(connector, function (session) {
    session.send(responseEvaluator.getResponse(session.message.text));
});