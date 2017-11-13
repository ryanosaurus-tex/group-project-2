var ormListFavorites = require("../config/orm_list_favorites.js");

var listFavorites = {

	selectAll: function(groupId, cb) {
		ormListFavorites.selectAll(groupId, function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		ormListFavorites.insertOne(cols, vals, function(res) {
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb) {
		ormListFavorites.updateOne(objColVals, condition, function(res) {
			cb(res);
		});
	},
	
	deleteOne: function(condition, cb) {
		ormListFavorites.deleteOne(condition, function(res) {
			cb(res);
		});
	}    
};

// Export the database functions for the controller
module.exports = listFavorites;
