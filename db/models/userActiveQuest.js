var db = require('../config.js');
var Quest = require('./quest.js');
var User = require('./user.js');


var UserActiveQuest = db.Model.extend({
	tableName: 'user_active_quests',
	user: function(){
		return this.belongsTo(User);
	},
	quest: function(){
		return this.belongsTo(Quest);
	},
	hasTimestamps: true
});

module.exports = UserActiveQuest;