module.exports = function(app, everyone) {

app.get('/mail', function(req, res){
    var session = req.session, t = [], user = [];
    
    var mail = getMail(req.params.username);
    
    res.render('mail_inbox', { session:session, t:t, mail:mail });
});

app.get('/mail/write', function(req, res){
    var session = req.session, t = [], user = [];
    
    var mail = getMail(req.params.username);
    
    res.render('mail_write', { session:session, t:t, mail:mail });
});


};