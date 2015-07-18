var express = require("express");
var bodyParser = require("body-parser");
var questController = require('./controllers/questController.js');
var waypointController = require('./controllers/waypointController.js');
var userController = require('./controllers/userController.js');

var db = require("./db/config.js");

var app = express();
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + app.get('port'));
});

/////////////
// QUEST CRUD
/////////////

app.get('/quests', function(req, res) {
  questController.getAllQuests(req, res);
});

app.get('/quests/:questId', function(req, res){
	questController.getOneQuest(req, res);
});

app.post('/quests', function(req, res) {
  questController.makeQuest(req, res);
});

app.put('/quests/:questId', function(req, res) {
  questController.updateQuest(req, res);
});

app.delete('/quests/:questId', function(req, res) {
  questController.deleteQuest(req, res);
});


/////////////////
// WAYPOINT CRUD
////////////////

app.get('/quests/:questId/waypoints', function(req, res) {
  waypointController.getWaypoints(req, res);
});

app.post('/quests/:questId/waypoints', function(req, res) {
  waypointController.makeWaypoint(req, res);
});

app.put('/quests/:questId/waypoints/:waypointId', function(req, res) {
  waypointController.updateWaypoint(req, res);
});

app.delete('/quests/:questId/waypoints/:waypointId', function(req, res) {
  waypointController.deleteWaypoint(req, res);
});

//////////////
// USER CRUD
/////////////

app.get('/users', function(req, res) {
  userController.getAllUsers(req, res);
});

app.get('/users/:facebookId/createdQuests', function(req, res){
  userController.getCreatedQuests(req, res);
});

app.get('/users/:facebookId', function(req, res){
  userController.getCreateUser(req, res);
});

app.get('/users/:facebookId/activeQuests', function(req, res) {
  userController.getActiveQuests(req, res);
});

app.post('/users/:facebookId/activeQuests/:questId', function(req, res){
  userController.findCreateActiveQuest(req, res);
});

app.put('/users/:facebookId/activeQuests/:questId', function(req, res) {
  userController.updateActiveQuest(req, res);
});

app.delete('/users/:facebookId/activeQuests/:questId', function(req, res) {
  userController.deleteActiveQuest(req, res);
});


// app.use("/", router);

module.exports = app;
