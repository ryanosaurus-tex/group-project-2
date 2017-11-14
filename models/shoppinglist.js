var ormShoppingList = require("../config/orm.js");

var modShoppingList = {
  shoppingListItems: function(cartId, cb) {
    ormShoppingList.shoppingListItems(cartId, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = modShoppingList;
	