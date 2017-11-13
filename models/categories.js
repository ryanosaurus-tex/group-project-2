var ormCategories = require("../config/orm_categories.js");

var categories = {

  selectAll: function(groupId, cb) {
    console.log ("mod 6: " + groupId);
    ormCategories.selectAll(groupId, function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    ormCategories.insertOne(cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    ormCategories.updateOne(objColVals, condition, function(res) {
      cb(res);
    });
  },
  
  deleteOne: function(condition, cb) {
    ormCategories.deleteOne(condition, function(res) {
      cb(res);
    });
  }    
};

// Export the database functions for the controller
module.exports = categories;
