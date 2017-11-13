var ormGroceryUsers = require("../config/orm_grocery_users.js");

var grocery_users = {

  selectAll: function(groupId, cb) {
    console.log ("mod 6: " + groupId);
    ormGroceryUsers.selectAll(groupId, function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    ormGroceryUsers.insertOne(cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    ormGroceryUsers.updateOne(objColVals, condition, function(res) {
      cb(res);
    });
  },
  
  deleteOne: function(condition, cb) {
    ormGroceryUsers.deleteOne(condition, function(res) {
      cb(res);
    });
  }    
};

// Export the database functions for the controller
module.exports = grocery_users;
