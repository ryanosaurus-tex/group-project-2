var ormShoppingListItems = require("../config/orm_shoppinglist_items.js");

var shoppinglist_items = {

	selectAll: function(cartId, cb) {
		ormShoppingListItems.selectAll(cartId, function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		ormShoppingListItems.insertOne(cols, vals, function(res) {
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb) {
		ormShoppingListItems.updateOne(objColVals, condition, function(res) {
			cb(res);
		});
	},
	
	deleteOne: function(condition, cb) {
		ormShoppingListItems.deleteOne(condition, function(res) {
			cb(res);
		});
	}    
};

// Export the database functions for the controller
module.exports = shoppinglist_items;
