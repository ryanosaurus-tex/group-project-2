var ormShoppingListItems = require("../config/orm_shoppinglist_items.js");

var shoppinglist_items = {
  selectAll: function(cartId, cb) {
    ormShoppingListItems.selectAll(cartId, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = shoppinglist_items;
	