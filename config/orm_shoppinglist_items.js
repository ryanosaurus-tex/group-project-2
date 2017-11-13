// Import MySQL connection.
var connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      // if (typeof value === "string" && value.indexOf(" ") >= 0) {
      if (typeof value === "string") {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var ormShoppingListItems = {
    
    selectAll: function(cartId, cb) {
        var queryString = "SELECT id AS shoppinglist_item_id, shopping_cart_id, product_name, category_name, " +
                            "brand_name, comments, in_cart " +
                            "FROM shoppinglist_items WHERE shopping_cart_id = " + cartId + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(cols, vals, cb) {

        var queryString = "INSERT INTO shoppinglist_items ";
        queryString += " (" + cols.toString() + ") ";
        // queryString += "VALUES (" + vals + ");";
        queryString += "VALUES (" + printQuestionMarks(vals.length) + ") ";

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(objColVals, condition, cb) {

        var queryString = "UPDATE shoppinglist_items ";

        queryString += "SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    deleteOne: function(condition, cb) {

        var queryString = "DELETE FROM  shoppinglist_items ";
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = ormShoppingListItems;
