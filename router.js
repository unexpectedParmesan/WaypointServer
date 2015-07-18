//Not currently in use. Will use once routing becomes more complex with route creation, users, etc.
var questController = require('./Controllers/questController.js');
var waypointController = require('./Controllers/questController.js');
var userController = require('./Controllers/questController.js');
var app = require('./server.js');



module.exports = function(app){

//Quest routes

app.get('/quests', function(req, res) {
  questController.getAllQuests(req, res);
});

app.get('/quests/:questId', function(req, res){
	questController.getOneQuest(req, res);
});

app.get('/quests/:questId?userId', function(req, res) {
	questController.getOneQuestByUser(req, res);
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

//Waypoint routes

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

//User routes

};