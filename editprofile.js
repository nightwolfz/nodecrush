module.exports = function(app, sequelize, Account, Profile) {

app.get('/edit/profile', function(req, res){
    var session = req.session, t = [];
    if (!session.username){
    	res.render('error404', { req:req, session:session, t:"Session not found." });return;
    }
    
    var profile = getProfile(req.session.username);
    var account = getAccount(req.session.username)
    
    if (profile){
    	res.render('editprofile', { req:req, session:session, t:t, account:account, profile:profile });
    }else{
    	res.render('error404', { req:req, session:session, t:t });
    }
});


};