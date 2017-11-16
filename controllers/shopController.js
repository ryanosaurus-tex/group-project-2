// Pull in required dependencies
var express = require('express');
var router = express.Router();

//***************************************************

// Add the universal analytics vars to use in router

//***************************************************
var ua = require('universal-analytics');
var visitor = ua('UA-109501568-1');
visitor.pageview().send();

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

router.get('/all/brands', function(req, res, visitor) {
  brands.selectAll(function(data) {
    var hbsObject1 = {
      brands: data
    };
    // console.log(hbsObject1);
    res.render("index", hbsObject1);

    visitor.pageview('/all/brands').send();
  });
});

router.post('/insert/brands', function(req, res, visitor) {
  brands.insertOne([
    'brand_name', 'manufacturer_name', 'full_address', 'website'
  ], [
    req.body.brands
  ], function(data) {
    res.redirect('/');
    visitor.pageview('/insert/brands').send();
  });
});

router.put('/update/brands/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  brands.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/update/brands').send();
    }
  });
});

router.delete('/delete/brands/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  brands.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/delete/brands').send();
    }
  });
});


//**************************************************

// Create the categories routes and associated logic

//**************************************************

router.get('/all/categories/:id', function(req, res, visitor) {
  var group_id = req.params.id;
  categories.selectAll(group_id, function(data) {
    var hbsObject2 = {
      categories: data
    };
    // console.log(hbsObject2);
    res.render("index", hbsObject2);

    visitor.pageview('/all/categories').send();
  });
});

router.post('/insert/categories', function(req, res, visitor) {
  categories.insertOne([
    'category_name', 'shopping_group_id'
  ], [
    req.body.categories
  ], function(data) {
    res.redirect('/');
    visitor.pageview('/insert/categories').send();
  });
});

router.put('/update/categories/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  categories.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/update/categories').send();
    }
  });
});

router.delete('/delete/categories/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  categories.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/delete/categories').send();
    }
  });
});

//*****************************************************

// Create the grocery users routes and associated logic

//*****************************************************

router.get('/all/grocery_users', function(req, res, visitor) {
  grocery_users.selectAll(function(data) {
    var hbsObject3 = {
      grocery_users: data
    };
    // console.log(hbsObject3);
    res.render("index", hbsObject3);

    visitor.pageview('/all/grocery_users').send();
  });
});

router.post('/insert/grocery_users', function(req, res, visitor) {
  grocery_users.insertOne([
    'user_name', 'user_email', 'shopping_group_id' 
  ], [
    req.body.grocery_users
  ], function(data) {
    res.redirect('/');
    visitor.pageview('/insert/grocery_users').send();
  });
});

router.put('/update/grocery_users/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  grocery_users.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/update/grocery_users').send();
    }
  });
});

router.delete('/delete/grocery_users/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  grocery_users.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/delete/grocery_users').send();
    }
  });
});


//************************************************

// Create the products routes and associated logic

//************************************************

router.get('/all/products', function(req, res, visitor) {
  products.selectAll(function(data) {
    var hbsObject4 = {
      products: data
    };
    // console.log(hbsObject4);
    res.render("index", hbsObject4);

    visitor.pageview('/all/products').send();
  });
});

router.post('/insert/products', function(req, res, visitor) {
  products.insertOne([
    'product_name', 'upc14', 'upc12', 'brand_id'
  ], [
    req.body.products
  ], function(data) {
    res.redirect('/');
    visitor.pageview('/insert/products').send();
  });
});

router.put('/update/products/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  products.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/update/products').send();
    }
  });
});

router.delete('/delete/products/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  products.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/delete/products').send();
    }
  });
});


//******************************************************

// Create the shopping carts routes and associated logic

//******************************************************

router.get('/all/shopping_carts', function(req, res, visitor) {
  shopping_carts.selectAll(function(data) {
    var hbsObject5 = {
      shopping_carts: data
    };
    // console.log(hbsObject5);
    res.render("index", hbsObject5);

    visitor.pageview('/all/shopping_carts').send();
  });
});

router.post('/insert/shopping_carts', function(req, res, visitor) {
  shopping_carts.insertOne([
    'shopping_group_id', 'cart_name'
  ], [
    req.body.shopping_carts
  ], function(data) {
    res.redirect('/');
    visitor.pageview('/insert/shopping_carts').send();
  });
});

router.put('/update/shopping_carts/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  shopping_carts.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/update/shopping_carts').send();
    }
  });
});

router.delete('/delete/shopping_carts/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  shopping_carts.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/delete/shopping_carts').send();
    }
  });
});


//*******************************************************

// Create the shopping groups routes and associated logic

//*******************************************************

router.get('/all/shopping_groups', function(req, res, visitor) {
  shopping_groups.selectAll(function(data) {
    var hbsObject6 = {
      shopping_groups: data
    };

    // console.log(hbsObject6);
    res.render("index", hbsObject6);

    visitor.pageview('/all/shopping_groups').send();
  });
});

router.post('/insert/shopping_groups', function(req, res, visitor) {
  shopping_groups.insertOne([
    'group_name'
  ], [
    req.body.shopping_groups
  ], function(data) {
    res.redirect('/');
    visitor.pageview('/insert/shopping_groups').send();
  });
});

router.put('/update/shopping_groups/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  shopping_groups.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/update/shopping_groups').send();
    }
  });
});

router.delete('/delete/shopping_groups/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  shopping_groups.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/delete/shopping_groups').send();
    }
  });
});


//***********************************************************

// Create the shopping list items routes and associated logic

//***********************************************************

router.get('/all/shoppinglist_items/:id', function(req, res, visitor) {
  var cart_id = req.params.id;
  shoppinglist_items.selectAll(cart_id, function(data) {
    var hbsObject7 = {
      shoppinglist_items: data
    };
    // console.log(hbsObject7);
    res.render("index", hbsObject7);

    visitor.pageview('/all/shoppinglist_items').send();
  });
});

router.post('/insert/shoppinglist_items', function(req, res, visitor) {
  shoppinglist_items.insertOne([
    'shopping_cart_id', 'product_name', 'product_id', 'category_id', 'brand_id', 'brand_name', 'comments', 'in_cart'
  ], [
    req.body.shoppinglist_items
  ], function(data) {
    res.redirect('/');
    visitor.pageview('/insert/shoppinglist_items').send();
  });
});

router.put('/update/shoppinglist_items/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  shoppinglist_items.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/update/shoppinglist_items').send();
    }
  });
});

router.delete('/delete/shoppinglist_items/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  shoppinglist_items.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/delete/shoppinglist_items').send();
    }
  });
});


//***********************************************************

// Create the list favorites items routes and associated logic

//***********************************************************

router.get('/all/list_favorites', function(req, res, visitor) {
  list_favorites.selectAll(function(data) {
    var hbsObject8 = {
      list_favorites: data
    };
    // console.log(hbsObject8);
    res.render("index", hbsObject8);

    visitor.pageview('/all/list_favorites').send();
  });
});

router.post('/insert/list_favorites', function(req, res, visitor) {
  list_favorites.insertOne([
    'shopping_group_id', 'product_name', 'product_id', 'brand_name', 'brand_id', 'category_name', 'category_id', 'comments'
  ], [
    req.body.list_favorites
  ], function(data) {
    res.redirect('/');
    visitor.pageview('/insert/list_favorites').send();
  });
});

router.put('/update/list_favorites/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  list_favorites.updateOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/update/list_favorites').send();
    }
  });
});

router.delete('/delete/list_favorites/:id', function(req, res, visitor) {
  var condition = 'id = ' + req.params.id;

  list_favorites.deleteOne({

  }, condition, function(data) {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so issue 404 error 
      return res.status(404).end();
    } else {
      res.status(200).end();
      visitor.pageview('/delete/list_favorites').send();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
