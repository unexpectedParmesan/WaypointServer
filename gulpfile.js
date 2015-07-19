var gulp = require('gulp');
var gutil = require('gutil');
var dbTask = require('gulp-db')
var shell = require('gulp-shell');

var dbManager = dbTask({
	//Comment out below and use bottom credentials for Heroku
	// host: '127.0.0.1',
	// user: 'root',
	// password: '',
	// dialect: 'mysql'
	//Comment out above and use above for local server
	host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'b220d94c2be53d',
  password: 'bd11f9e8',
  database: 'heroku_49f978646a3ea6c'
});



gulp.task('drop', dbManager.drop('waypointdb'));
gulp.task('create', dbManager.create('waypointdb'));

gulp.task('reset', ['drop', 'create'], shell.task([
  'echo database test running',
  'node server.js'
]));

gulp.task('populate', shell.task([
	'node db/populate.js'
]));

gulp.task('default');
