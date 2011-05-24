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

};