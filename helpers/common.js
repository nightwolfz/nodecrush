module.exports = function(app, everyone) {
    
	var profiles = {
			"nightwolfz":{
				id:1,
				lastName: "lasty",
				firstName: "firsty",
				birthDay: "27 March 1989",
				gender: "0",
				aboutMe: "abouty",
				msgMeIf: "message me if",
				lookingFor: "looky"
			},
			"xerios":{
				id:1,
				lastName: "Xer",
				firstName: "Ios",
				birthDay: "8 April 1991",
				gender: "0",
				aboutMe: "developz",
				msgMeIf: "if ya chick",
				lookingFor: "dunno m8"
			},
	};
	
	var mails = [
			[
				subject: "Hey there",
				who: "nightwolfz",
				with: "xerios",
				content: "content of the mail"
			]
	];
	
	
	
    getUsername = function(req){
        if (req.session.username)
        return req.session.username;
    }
    showFavorites = function(){
        var list = ['user1','user2','user3','user4','user5'];
        return list;
    }
    checkMessages = function(){
        var countMsg = 3;
        return "You have "+countMsg+" message(s).";
    }
    checkAlerts = function(){
        var countAlerts = 7;
        return "You have "+countAlerts+" alert(s).";
    }
    
    getProfile = function(username){
    	var profile = profiles[username];
    	return profile;
    }
    getMail = function(who){
    	var mail = mails.find, who);
    	return mail;
    }
    
    Array.prototype.find = function(searchStr) {
    	var returnArray = false;
    	for (i=0; i<this.length; i++) {
    	  if (typeof(searchStr) == 'function') {
    	    if (searchStr.test(this[i])) {
    	      if (!returnArray) { returnArray = [] }
    	      returnArray.push(i);
    	    }
    	  } else {
    	    if (this[i]===searchStr) {
    	      if (!returnArray) { returnArray = [] }
    	      returnArray.push(i);
    	    }
    	  }
    	}
    	return returnArray;
    }
    
    function isInArray(arr, needle) {
    	for (var keys in this) {if (this[keys] == element) {return keys;break;}  }
    	return -1;
    }
};