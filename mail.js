module.exports = function(app, sequelize, Account, Profile) {

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

app.get('/test/:username', function(req, res){
    var session = req.session, t = [], user = [];
    
    Account.build({
    	username: req.params.username,
    	password: 'aaaaaa',
    	email: 'nightwolfz@gmail.com'
    })
    .save().on('success', function(data) {
    	console.log('Account created.');
    	
    	Profile.build({
        	firstName: req.params.username,
        	lastName: "Lasty",
        	gender: 0,
        	birthday: new Date(),
        	aboutMe: "aboooout",
        	likes: "liiike",
        	msgIf: "meeeesggg",
        	AccountId:data.id
        })
        .save().on('success', function(data) {console.log('Account created.');});
    	
    	
    });
    
    res.send('test');
});


};