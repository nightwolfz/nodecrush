module.exports = function(app, sequelize, Account, Profile) {

app.get('/show/:username', function(req, res){
    var session = req.session, t = [], user = [];
    
    //var profile = getProfile(req.params.username);
    
    Account.find({ where: {username: "nightwolfz"} }).on('success', function(account) {
    Profile.find({ where: {AccountId: account.id} }).on('success', function(profile) {
    		
    		if (profile){
		    	res.render('showprofile', { req:req, account: account, session:session, t:t, profile:profile });
		    }else{
		    	res.render('error404', { title: '404: Profile not found.', session:session, t:t, profile:profile });
		    }
    		
    });	
    });
    
    
});


};