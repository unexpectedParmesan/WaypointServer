var db = require('../config.js');
var UserCreatedQuest = require('../models/UserCreatedQuest.js');

var UserCreatedQuests = new db.Collection();

UserCreatedQuests.model = UserCreatedQuest;

module.exports = UserCreatedQuests;