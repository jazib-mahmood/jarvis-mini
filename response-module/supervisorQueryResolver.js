const exports = module.exports ={}

exports.queryResolver = () => {
return {
    'hi': {
        text:'hey',
         isApiCall: false
        },
    'connect to hourtimesheet' : {
        text: 'http://clickchain.ourtimesheet.com:8080/timesheets/review-jarvis',
         isApiCall: true
        } 
}
}