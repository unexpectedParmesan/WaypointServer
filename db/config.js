if (process.env.NODE_ENV === 'production') {
	var knex = require('knex')({
		client: 'mysql',
		connection: {
			host: 'us-cdbr-iron-east-02.cleardb.net',
			user: 'b220d94c2be53d',
			password: 'bd11f9e8',
			database: 'heroku_49f978646a3ea6c',
			charset: 'utf8'
		}
	});
} else {
	var knex = require('knex')({
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			user: 'root',
			password: '',
			database: 'waypointdb',
			charset: 'utf8'
		}
	});
}

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('quests').then(function(exists) {
	if (!exists){
		db.knex.schema.createTable('quests', function(quest){
			quest.increments('id').primary();
			quest.integer('creator_id');
			quest.string('title', 100).unique();
			quest.string('length', 100);
			quest.string('description', 5000);
			quest.string('estimated_time', 100);
			quest.timestamps();
		}).then(function(table){
			console.log('Created table', table);
		});
	}
});

db.knex.schema.hasTable('waypoints').then(function(exists) {
	if (!exists) {
		db.knex.schema.createTable('waypoints', function(waypoint){
			waypoint.increments('id').primary();
			waypoint.integer('quest_id');
			waypoint.integer('index_in_quest');
			waypoint.float('latitude', 15,10);
			waypoint.float('longitude', 15,10);
			waypoint.string('title', 100);
			waypoint.string('description', 5000);
			waypoint.timestamps();
		}).then(function(table){
			console.log('Created table', table);
		});
	}
});

module.exports = db;
