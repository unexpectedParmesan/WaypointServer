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
    new Quest().query({where: {user_id: req.params.userId}})
      .fetchAll({
      withRelated: 'user_active_quests'
      }).then(function(usersActiveQuests) {
      res.status(200).send(usersActiveQuests);
    });
  },

  updateActiveQuest = function(req, res){
    new userActiveQuest({
      user_id: req.params.userId,
      quest_id: req.params.questId
    }).fetch().then(function(userActiveQuest){
      if (!userActiveQuest){
        res.status(404).send('Quest not found');
      } else {
        for (var key in req.body) {
          userActiveQuest.set(key, req.body[key]);
        }
      }
      userActiveQuest.save().then(function(userActiveQuest){
        res.status(200).send(userActiveQuest);
      });
    });
  },

  deleteActiveQuest = function(req, res){
    new userActiveQuest({
      user_id: req.params.userId,
      quest_id: req.params.questId
    }).fetch().then(function(userActiveQuest){
      if (!userActiveQuest){
        res.status(404).send('Quest not found');
      } else {
        userActiveQuest.destroy().then(function(success){
          res.status(200).send();
        });
        }
      });
  },

  makeActiveQuest = function(req, res){
  
  }

};