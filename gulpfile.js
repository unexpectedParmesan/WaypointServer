var gulp = require('gulp');
var gutil = require('gutil');
var dbTask = require('gulp-db')({ user: 'root' });
var shell = require('gulp-shell');
var connect = require('gulp-connect');

gulp.task('resetdb', ['dbconnect'], shell.task([
	
	// 'mysql --host=us-cdbr-iron-east-02.cleardb.net --user=b7d6027da9b5a3 --password=da813c61'
	]));
//Creates a new database 'waypointdb', ERROR if already exists
gulp.task('dbconnect', function(){
	var conn = {
		host: '127.0.0.1',
		user: 'root',
		password: ''
	};

	var knex = require('knex')({client: 'mysql', connection: conn});
  
  knex.raw('CREATE DATABASE waypointdb')
  .then(function(){
  	knex.destroy();

  	conn.database = 'waypointdb';
  	knex = require('knex')({client: 'mysql', connection: conn});

    knex.destroy();
  })
});

gulp.task('default', ['resetdb']);
