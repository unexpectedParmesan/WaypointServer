var url = require('url');

var Quest = require('../db/models/quest.js');
var Quests = require('../db/collections/quests.js');

module.exports = {


  // USE LATER IF NECESSARY

  // getQuest: function(req, res){
  // 	var questTitle = req.body.title;
  //
  // 	Quest.forge().where({title: questTitle}).fetchOne()
  // 	  .then(function(model){
  // 	  	//Log quest to console for testing - remove for production
  // 	  	console.log(model);
  // 	  	res.status(200).send(model);
  // 	  });
  // },

  getAllQuests: function(req, res) {
    new Quest().fetchAll({
      withRelated: 'waypoints'
    }).then(function(questWithWaypoints) {
      res.status(200).send(questWithWaypoints);
    });
  },

  makeQuest: function(req, res) {
    console.log(req.body);
    new Quest({
      title: req.body.title
    }).fetch().then(function(found) {
      if (found) {
        res.status(422).send('Sorry, there\'s already a quest with that title!');
      } else {
      	var newQuest = new Quest({
          title: req.body.title,
          length: req.body.length,
          description: req.body.description,
          estimated_time: req.body.estimated_time,
      	});
      	newQuest.save().then(function(quest){
      		//Log saved quest to console for testing - remove for production
      		console.log("Quest saved to database", quest)
      		res.status(200).send(quest);
      	});
      }
    });
  }
};
