var ormProducts = require("../config/orm_products.js");

var products = {

	selectAll: function(cb) {
		ormProducts.selectAll(function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		ormProducts.insertOne(cols, vals, function(res) {
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb) {
		ormProducts.updateOne(objColVals, condition, function(res) {
			cb(res);
		});
	},
	
	deleteOne: function(condition, cb) {
		ormProducts.deleteOne(condition, function(res) {
			cb(res);
		});
	}    
};

// Export the database functions for the controller
module.exports = products;
