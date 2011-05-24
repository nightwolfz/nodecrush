
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('nodecrush', 'root', null);

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
  app.use(express.errorHandler({ 
	  dumpExceptions: true, showStack: true 
  })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

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
	ori: {type: Sequelize.INTEGER, defaultValue: 0},
	relation: {type: Sequelize.INTEGER, defaultValue: 0},
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

var Picture = sequelize.define('Picture', {
	src: Sequelize.STRING
});

var Comment = sequelize.define('Comment', {
	username: Sequelize.STRING,
	content: Sequelize.TEXT
});

Account.hasOne(Profile);
Profile.hasMany(Message);
Profile.hasMany(Picture);
Picture.hasMany(Comment);
Account.sync();Profile.sync();Picture.sync();


/*
You can put some local variables
to be used in all templates
*/
app.use(function(req,res,next){
  req.local = new Object;
  req.local = req.session;
  next();
});


/*================================
 * Controllers
 *================================*/
require('./index.js')(app, sequelize, Account, Profile);
require('./showprofile.js')(app, sequelize, Account, Profile);
require('./mail.js')(app, sequelize, Account, Profile);
require('./editprofile.js')(app, sequelize, Account, Profile);
/*================================
 * Common
 *================================*/
require('./helpers/common.js')(app, sequelize, Account, Profile);




if (!module.parent) {
  app.listen(80);
  console.log("Express server listening on port %d", app.address().port);
}
