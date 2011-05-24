module.exports = function(app, sequelize, Account, Profile) {
    
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
	
	var mails = {
			1:{
				subject: "Hey there",
				who: "nightwolfz",
				with: "xerios",
				content: "content of the mail"
			}
	};
	
	getOrientation = function(ori, gender){
		if (ori == 1) return 'Bisexual';
		if (ori == 2) return (gender == 0) ? 'Gay' : 'Lesbian';
		return 'Straight';
	}
	getRelation = function(relation){
		if (relation == 0) return 'Single';
		if (relation == 1) return 'Taken';
		if (relation == 2) return 'Married';
		if (relation == 3) return 'Divorced';
		if (relation == 4) return 'Window';
		if (relation == 5) return 'In doubt';
	}
	getAge = function(birthDate) {
		var now = new Date();
		function isLeap(year) {
			return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
		}   
		var days = Math.floor((now.getTime() - birthDate.getTime())/1000/60/60/24);
		var age = 0;
		for (var y = birthDate.getFullYear(); y <= now.getFullYear(); y++){
			var daysInYear = isLeap(y) ? 366 : 365;
			if (days >= daysInYear){
				days -= daysInYear;
				age++;
			}
		}
		return age;
	}
	
	
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
    	/*Account.find({ where: {username: username} }).on('success', function(account) {
        	Profile.find({ where: {AccountId: account.id} }).on('success', function(profile) {
        		return {};
        	});
        });*/
    }
    getMail = function(who){
    	var mail = mails.find(who);
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