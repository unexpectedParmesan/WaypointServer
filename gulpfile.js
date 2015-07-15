var gulp = require('gulp');
var gutil = require('gutil');
var dbTask = require('gulp-db')
var shell = require('gulp-shell');

var dbManager = dbTask({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	dialect: 'mysql'
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
