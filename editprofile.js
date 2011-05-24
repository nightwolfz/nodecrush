module.exports = function(app, sequelize, Account, Profile) {

app.get('/edit/profile', function(req, res){
    var session = req.session, t = [], user = [];
    
    var profile = getProfile(req.params.username);
    
    if (profile){
    	res.render('editprofile', { title: profile.name+'Profile', session:session, t:t, profile:profile });
    }else{
    	res.render('error404', { title: profile.name+'Profile', session:session, t:t, profile:profile });
    }
});


};