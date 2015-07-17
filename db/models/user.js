var db = require('../config.js');
var UserCreatedQuests = require('./userCreatedQuests.js');
var UserActiveQuests = require('./userActiveQuests.js');

var User = db.Model.extend({
	tableName: 'users',
	user_created_quest: function(){
		return this.hasMany(UserCreatedQuest);
	},
	user_active_quest: function(){
		return this.hasMany(UserActiveQuest);
	},
	hasTimestamps: true
});

module.exports = User;