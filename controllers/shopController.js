// Pull in required dependencies
var express = require('express');
var router1 = express.Router();
var router2 = express.Router();
var router3 = express.Router();
var router4 = express.Router();
var router5 = express.Router();
var router6 = express.Router();
var router7 = express.Router();
var router8 = express.Router();

// Import the shopping model js files (brands, categories, grocery_users, products, shopping_cart, shopping_group, shoppinglist_items) to use its database functions.
var brands = require('../models/brands.js');
  // brand_name, manufacturer_name, full_address, website
var categories = require('../models/categories.js');
  // catergory_name, shopping_group_id
var grocery_users = require('../models/grocery_users.js');
  // user_name, user_email, shopping_group_id
var list_favorites = require('../models/list_favorites.js');
  // shopping_group_id, product_name, product_id, brand_name, brand_id, category_name, category_id, comments
var products = require('../models/products.js');
  // product_name, upc14, upc12
var shopping_carts = require('../models/shopping_carts');
  // shopping_group_id, cart_name, date_opened, date_closed
var shopping_groups = require('../models/shopping_groups.js');
  // group_name
var shoppinglist_items = require('../models/shoppinglist_items.js');
  // shopping_cart_id, product_name, product_id, category_id, brand_id, brand_name, comments, in_cart

//**********************************************
// Create the brands routes and associated logic
//**********************************************
router1.get('/all/brands', function(req, res) {
  brands.selectAll(function(data) {
    var hbsObject1 = {
      brands: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject1);
  });
});

router1.post('/insert/brands', function(req, res) {
  brands.insertOne([
    'brand_name', 'manufacturer_name', 'full_address', 'website'
  ], [
    req.body.brands
  ], function(data) {
    res.redirect('/');
  });
});

router1.put('/update/brands/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  brands.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router1.delete('/delete/brands/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  brands.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//**************************************************
// Create the categories routes and associated logic
//**************************************************
router2.get('/all/categories', function(req, res) {
  categories.selectAll(function(data) {
    var hbsObject2 = {
      categories: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject2);
  });
});

router2.post('/insert/categories', function(req, res) {
  categories.insertOne([
    'category_name', 'shopping_group_id'
  ], [
    req.body.categories
  ], function(data) {
    res.redirect('/');
  });
});

router2.put('/update/categories/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  categories.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router2.delete('/delete/categories/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  categories.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//*****************************************************
// Create the grocery users routes and associated logic
//*****************************************************
router3.get('/all/grocery_users', function(req, res) {
  grocery_users.selectAll(function(data) {
    var hbsObject3 = {
      grocery_users: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject3);
  });
});

router3.post('/insert/grocery_users', function(req, res) {
  grocery_users.insertOne([
    'user_name', 'user_email', 'shopping_group_id' 
  ], [
    req.body.grocery_users
  ], function(data) {
    res.redirect('/');
  });
});

router3.put('/update/grocery_users/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  grocery_users.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router3.delete('/delete/grocery_users/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  grocery_users.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//************************************************
// Create the products routes and associated logic
//************************************************
router4.get('/all/products', function(req, res) {
  products.selectAll(function(data) {
    var hbsObject4 = {
      products: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject4);
  });
});

router4.post('/insert/products', function(req, res) {
  products.insertOne([
    'product_name', 'upc14', 'upc12', 'brand_id'
  ], [
    req.body.products
  ], function(data) {
    res.redirect('/');
  });
});

router4.put('/update/products/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  products.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router4.delete('/delete/products/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  products.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//******************************************************
// Create the shopping carts routes and associated logic
//******************************************************
router5.get('/all/shopping_carts', function(req, res) {
  shopping_carts.selectAll(function(data) {
    var hbsObject5 = {
      shopping_carts: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject5);
  });
});

router5.post('/insert/shopping_carts', function(req, res) {
  shopping_carts.insertOne([
    'shopping_group_id', 'cart_name'
  ], [
    req.body.shopping_carts
  ], function(data) {
    res.redirect('/');
  });
});

router5.put('/update/shopping_carts/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  shopping_carts.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router5.delete('/delete/shopping_carts/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  shopping_carts.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//*******************************************************
// Create the shopping groups routes and associated logic
//*******************************************************
router6.get('/all/shopping_groups', function(req, res) {
  shopping_groups.selectAll(function(data) {
    var hbsObject6 = {
      shopping_groups: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject6);
  });
});

router6.post('/insert/shopping_groups', function(req, res) {
  shopping_groups.insertOne([
    'group_name'
  ], [
    req.body.shopping_groups
  ], function(data) {
    res.redirect('/');
  });
});

router6.put('/update/shopping_groups/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  shopping_groups.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router6.delete('/delete/shopping_groups/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  shopping_groups.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//***********************************************************
// Create the shopping list items routes and associated logic
//***********************************************************
router7.get('/all/shoppinglist_items', function(req, res) {
  shoppinglist_items.selectAll(function(data) {
    var hbsObject7 = {
      shoppinglist_items: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject7);
  });
});

router7.post('/insert/shoppinglist_items', function(req, res) {
  shoppinglist_items.insertOne([
    'shopping_cart_id', 'product_name', 'product_id', 'category_id', 'brand_id', 'brand_name', 'comments', 'in_cart'
  ], [
    req.body.shoppinglist_items
  ], function(data) {
    res.redirect('/');
  });
});

router7.put('/update/shoppinglist_items/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  shoppinglist_items.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router7.delete('/delete/shoppinglist_items/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  shoppinglist_items.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//***********************************************************
// Create the list favorites items routes and associated logic
//***********************************************************
router8.get('/all/list_favorites', function(req, res) {
  list_favorites.selectAll(function(data) {
    var hbsObject8 = {
      list_favorites: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject8);
  });
});

router8.post('/insert/list_favorites', function(req, res) {
  list_favorites.insertOne([
    'shopping_group_id', 'product_name', 'product_id', 'brand_name', 'brand_id', 'category_name', 'category_id', 'comments'
  ], [
    req.body.list_favorites
  ], function(data) {
    res.redirect('/');
  });
});

router8.put('/update/list_favorites/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  list_favorites.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router8.delete('/delete/list_favorites/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  list_favorites.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = {
  router1,
  router2,
  router3,
  router4,
  router5,
  router6,
  router7,
  router8
};