var db = require('../config.js');
var Quest = require('./quest.js');
var User = require('./user.js');
var Waypoint = require('./waypoint.js')


var UserActiveQuest = db.Model.extend({
	tableName: 'user_active_quests',
	user: function() {
		return this.belongsTo(User);
	},
	quest: function() {
		return this.belongsTo(Quest).withPivot('current_waypoint_index');
	},
	waypoints: function() {
		return this.hasMany(Waypoint);
	},
	// currentWaypointIndex: function() {
	// 	return this.belongsTo()
	// },
	hasTimestamps: true
});

module.exports = UserActiveQuest;
