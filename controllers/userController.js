var url = require('url');

var Quest = require('../db/models/quest.js');
var Quests = require('../db/collections/quests.js');
var userActiveQuest = require('../db/models/userActiveQuest.js');
 
module.exports = {

  getActiveQuests = function(req, res){
    new Quest().query({where: {user_id: req.params.userId}})
      .fetchAll()
      withRelated: 'user_active_quests'
      .then(function(usersActiveQuests) {
      res.status(200).send(usersActiveQuests);
    });
  }

};