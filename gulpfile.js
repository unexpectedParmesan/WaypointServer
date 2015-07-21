var gulp = require('gulp');
var gutil = require('gutil');
var dbTask = require('gulp-db')
var shell = require('gulp-shell');

if (process.env.NODE_ENV === 'production') {
	var dbName = 'heroku_49f978646a3ea6c';
	var dbManager = dbTask({
		host: 'us-cdbr-iron-east-02.cleardb.net',
	  user: 'b220d94c2be53d',
	  password: 'bd11f9e8',
	  database: dbName
	});
} else {
	var dbName = 'waypointdb';
	var dbManager = dbTask({
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'waypointdb',
		dialect: 'mysql'
	});
}

gulp.task('drop', dbManager.drop(dbName));
gulp.task('create', dbManager.create(dbName));

gulp.task('reset', ['drop', 'create'], shell.task([
  'echo database test running',
  'node server.js'
]));

gulp.task('populate', shell.task([
	'node db/populate.js'
]));

gulp.task('default');
