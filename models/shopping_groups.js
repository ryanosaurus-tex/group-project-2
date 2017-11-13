var ormShoppingGroups = require("../config/orm_shopping_groups.js");

var shopping_groups = {

	selectAll: function(cb) {
		ormShoppingGroups.selectAll(function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		ormShoppingGroups.insertOne(cols, vals, function(res) {
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb) {
		ormShoppingGroups.updateOne(objColVals, condition, function(res) {
			cb(res);
		});
	},
	
	deleteOne: function(condition, cb) {
		ormShoppingGroups.deleteOne(condition, function(res) {
			cb(res);
		});
	}    
};

// Export the database functions for the controller
module.exports = shopping_groups;
