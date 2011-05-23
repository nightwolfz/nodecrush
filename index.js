module.exports = function(app, everyone) {

app.get('/', function(req, res){
    var session = req.session, t = [], user = [];
    session.username = 'Testname';
    
    user.name = getUsername(req);
    
    t.favorites = showFavorites();
    t.messages = checkMessages();
    t.alerts = checkAlerts();
    
    res.render('index', { title: 'Express', sess: user.name, t : t });
});

app.get('/show/:username', function(req, res){
    var session = req.session, t = [], user = [];
    session.username = 'Testname';
    
    var profile = getProfile(req.params.username);
    
    if (profile){
    	res.render('showprofile', { title: profile.firstName+' Profile', session:session, t:t, profile:profile });
    }else{
    	res.render('error404', { title: '404: Profile not found.', session:session, t:t, profile:profile });
    }
});

app.get('/edit/profile', function(req, res){
    var session = req.session, t = [], user = [];
    session.username = 'Testname';
    
    var profile = getProfile(req.params.username);
    
    if (profile){
    	res.render('editprofile', { title: profile.name+'Profile', session:session, t:t, profile:profile });
    }else{
    	res.render('error404', { title: profile.name+'Profile', session:session, t:t, profile:profile });
    }
});


};