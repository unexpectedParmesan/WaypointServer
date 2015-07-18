var url = require('url');

var Quest = require('../db/models/quest.js');
var Quests = require('../db/collections/quests.js');
var userActiveQuest = require('../db/models/userActiveQuest.js');
 
module.exports = {

 getMakeUser = function(req, res){
  new User({
      facebook_id: req.body.facebook_id
    }).fetch().then(function(user) {
      if (user) {
        res.status(200).send(user);
      } else {
        var newUser = new User({
          facebook_id: req.body.facebook_id,
          name: req.body.name,
          profile_pic: req.body.profile_pic
        });
      }
      newUser.save().then(function(user){
        res.status(200).send(user);
      });
    }); 
 },

  getActiveQuests = function(req, res){
    new Quest().query({where: {facebook_id: req.params.facebook_id}})
      .fetchAll({
      withRelated: 'user_active_quests'
      }).then(function(usersActiveQuests) {
      res.status(200).send(usersActiveQuests);
    });
  },

  updateActiveQuest = function(req, res){
  
  },

  deleteActiveQuest = function(req, res){

  },

  makeActiveQuest = function(req, res){

  }

};