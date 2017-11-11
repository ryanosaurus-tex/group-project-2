CREATE TABLE shoppinglist_items (
  id int(11) NOT NULL AUTO_INCREMENT,
  shopping_cart_id int(11),
  product_name varchar(255),
  product_id int(11),
  category_id int(11),
  category_name varchar(255),
  brand_id int(11),
  brand_name varchar (255),
  comments varchar (255),
  in_cart tinyint default 0,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
