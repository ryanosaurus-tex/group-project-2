CREATE TABLE list_favorites (
  id int(11) NOT NULL AUTO_INCREMENT,
  shopping_group_id int(11),
  product_name varchar(255) DEFAULT NULL,
  product_id int (11),
  brand_name varchar(255),
  brand_id int(11) DEFAULT NULL,
  category_name varchar (255),
  category_id int(11),
  comments varchar (255),
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id));

-- Note that although List Favorites may be initialized from the
-- overall Products table, they don't have to have been. So the
-- product_id, category_id, and brand_id fields here can be null.