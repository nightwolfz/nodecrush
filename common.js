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
			}
	};
	
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
};