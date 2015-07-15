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
		// host: 'us-cdbr-iron-east-02.cleardb.net',
		// user: 'b7d6027da9b5a3',
		// password: 'da813c61',
		// database: 'heroku_e73d8a068f6abe5',
		// charset: 'utf8'
    //Connection data for connecting to local instance of database, only used for testing

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('paths').then(function(exists) {
	if (!exists){
		db.knex.schema.createTable('paths', function(path){
			path.increments('id').primary();
			path.integer('creator_id');
			path.string('title', 100).unique();
			path.string('length', 100);
			path.string('description', 5000);
			path.string('estimated_time', 100);
			// Creates created_at and updated_at columns
			path.timestamps();
		}).then(function(table){
			console.log('Created table', table);
		});
	}
});

db.knex.schema.hasTable('waypoints').then(function(exists) {
	if (!exists) {
		db.knex.schema.createTable('waypoints', function(waypoint){
			waypoint.increments('id').primary();
			waypoint.integer('path_id');
			waypoint.integer('index_in_path');
			waypoint.float('latitude', 15, 10);
			waypoint.float('longitude', 15, 10);
			waypoint.string('title', 100);
			waypoint.string('description', 5000);
			// Creates created_at and updated_at columns
			waypoint.timestamps();
		}).then(function(table){
			console.log('Created table', table);
		});
	}
});

module.exports = db;
