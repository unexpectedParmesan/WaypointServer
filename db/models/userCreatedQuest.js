var db = require('../config.js');
var Quest = require('./quest.js');
var User = require('./user.js');

var UserCreatedQuest = db.Model.extend({
	tableName: 'user_created_quests',
	user: function(){
		return this.belongsTo(User);
	},
	quest: function(){
		return this.hasOne(Quest);
	},
	hasTimestamps: true
});

module.exports = UserCreatedQuest;