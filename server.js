var express = require("express");
// var router = require("./router.js");
var bodyParser = require("body-parser");
var questController = require('./controllers/questController.js');


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


// WE'LL START USING A ROUTER WHEN THINGS GET MORE COMPLEX
// app.use("/", router);

module.exports = app;
