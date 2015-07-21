var db = require('../config.js');
var Quest = require('./quest.js');
var UserActiveQuest = require('./UserActiveQuest.js');

var Waypoint = db.Model.extend({
	tableName: 'waypoints',
	quest: function() {
		return this.belongsTo(Quest);
	},
	hasTimestamps: true
});

module.exports = Waypoint;
