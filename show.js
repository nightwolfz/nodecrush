module.exports = function(app, everyone) {

app.get('/show/:username', function(req, res){
    var session = req.session, t = [], user = [];
    
    var profile = getProfile(req.params.username);
    
    if (profile){
    	res.render('showprofile', { title: profile.firstName+' Profile', session:session, t:t, profile:profile });
    }else{
    	res.render('error404', { title: '404: Profile not found.', session:session, t:t, profile:profile });
    }
});


};