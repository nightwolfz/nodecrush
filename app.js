
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();
var nowjs = require('now');
var everyone = nowjs.initialize(app);
var sequelize = new Sequelize('database', 'root', null);

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'coolCat' }));
  app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

/*================================
 * Common
 *================================*/
require('./helpers/common.js')(app, everyone);

/*================================
 * Models
 *================================*/
var Account = sequelize.define('Account', {
	username: Sequelize.STRING,
	password: Sequelize.STRING,
	email: Sequelize.STRING
});

var Profile = sequelize.define('Profile', {
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING,
	gender: {type: Sequelize.INTEGER, defaultValue: 0},
	birthday: Sequelize.DATE,
	aboutMe: Sequelize.TEXT,
	likes: Sequelize.TEXT,
	msgIf: Sequelize.TEXT
});

var Message = sequelize.define('Message', {
	subject: Sequelize.STRING,
	who: Sequelize.STRING,
	with: Sequelize.STRING,
	content: Sequelize.TEXT
});

Account.hasOne(Profile);
Profile.hasMany(Message);
Account.sync();
Profile.sync();

/*================================
 * Controllers
 *================================*/
require('./index.js')(app, everyone);
require('./show.js')(app, everyone);
require('./mail.js')(app, everyone);
require('./editprofile.js')(app, everyone);







/*================================
 * Interview
 *================================*/

/**
 * Interview
 */
app.get('/test', function(req, res){
    var session = req.session;
    session.username = 'Testname';
    
    everyone.now.distributeMessage = function(message){
    	  everyone.now.receiveMessage('Guest', message);
    	//everyone.now.receiveMessage(this.now.name, message);
	};

    res.render('test', { session:session });

});


if (!module.parent) {
  app.listen(80);
  console.log("Express server listening on port %d", app.address().port);
}
