var ormShoppingCarts = require("../config/orm_shopping_carts.js");

var shopping_carts = {

  selectAll: function(groupId, cb) {
    console.log ("mod 6: " + groupId);
    ormShoppingCarts.selectAll(groupId, function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    ormShoppingCarts.insertOne(cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    ormShoppingCarts.updateOne(objColVals, condition, function(res) {
      cb(res);
    });
  },
  
  deleteOne: function(condition, cb) {
    ormShoppingCarts.deleteOne(condition, function(res) {
      cb(res);
    });
  }    
};

// Export the database functions for the controller
module.exports = shopping_carts;
