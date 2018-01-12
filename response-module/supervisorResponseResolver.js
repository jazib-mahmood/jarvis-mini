var exports = module.exports = {};

exports.resolveResponse = function(messageFromUser){
    if(messageFromUser.includes('hi')){
        responseMessage = 'hey';
        return responseMessage;
    }
    else if(messageFromUser.includes('submitted timesheets')){
        return responseMessage ='yes, there are ' + 12 + ' timesheets ready to be approved';    
    }
    else if(messageFromUser.includes('approve')){
        return responseMessage =12 +' timesheets have been approved'; 
        
    }
    else if(messageFromUser.includes('clock me in')){
        var date =new Date();
        return responseMessage = 'successfully clocked you in at '+date.getDate() +'-'+12+ '-'+ date.getFullYear()+' '+
        date.getHours() +':' + date.getMinutes() + ':'+date.getSeconds() ;  
    }
    else if(messageFromUser.includes('clock me out')){
        var date =new Date();
        return responseMessage = 'successfully clocked you out at '+date.getDate() +'-'+12+ '-'+ date.getFullYear()+' '+
        date.getHours() +':' + date.getMinutes() + ':'+date.getSeconds() ;  
    }
    else{
       return responseMessage = 'idk what you saying man';
    }
};