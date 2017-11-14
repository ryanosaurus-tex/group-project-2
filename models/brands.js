var ormBrands = require("../config/orm_brands.js");

var brands = {

	selectAll: function(cb) {
		ormBrands.selectAll(function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		ormBrands.insertOne(cols, vals, function(res) {
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb) {
		ormBrands.updateOne(objColVals, condition, function(res) {
			cb(res);
		});
	},
	
	deleteOne: function(condition, cb) {
		ormBrands.deleteOne(condition, function(res) {
			cb(res);
		});
	}    
};

// Export the database functions for the controller
module.exports = brands;
