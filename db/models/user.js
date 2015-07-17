var db = require('../config.js');
var UserCreatedQuests = require('./userCreatedQuests.js');
var UserActiveQuests = require('./userActiveQuests.js');

var User = db.Model.extend({
	tableName: 'users',
	activeQuests: function(){
		return this.hasMany(UserActiveQuest);
	},
	hasTimestamps: true
});

module.exports = User;