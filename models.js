module.exports = function(sequelize, DataTypes) {

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

var Profile = sequelize.define('Profile', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  gender: {type: Sequelize.INTEGER, defaultValue: 0},
  birthday: Sequelize.DATE,
  aboutMe: Sequelize.TEXT,
  likes: Sequelize.TEXT,
  msgIf: Sequelize.TEXT
});

Account.hasOne(Profile);
Profile.hasMany(Messages)

// Synchronize with mySQL
Account.sync();



/*
 //Profile.findAll()
 Profile.find({ where: {title: 'aProject'} }).on('succes', function(project) {
  // project will be the first entry of the Projects table with the title 'aProject' || null
})
*/

};

