module.exports = function(app, everyone) {

app.get('/', function(req, res){
    var session = req.session, t = [], user = [];
    
    user.name = getUsername(req);
    
    t.favorites = showFavorites();
    t.messages = checkMessages();
    t.alerts = checkAlerts();
    
    res.render('index', { req:req, sess: user.name, t : t });
});






app.post('/login', function(req, res){
    var session = req.session, t = [], user = [];
    session.username = req.body.login.username;
    session.save();
    res.redirect('back');
});
app.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect('back');
});

};