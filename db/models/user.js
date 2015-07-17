var db = require('../config.js');
var UserCreatedQuests = require('./userCreatedQuests.js');
var UserActiveQuests = require('./userActiveQuests.js');

var User = db.Model.extend({
	tableName: 'users',
	createdQuest: function(){
		return this.hasMany(UserCreatedQuest);
	},
	activeQuest: function(){
		return this.hasMany(UserActiveQuest);
	},
	hasTimestamps: true
});

module.exports = User;