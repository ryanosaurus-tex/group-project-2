CREATE TABLE products (
  id int(11) NOT NULL AUTO_INCREMENT,
  product_name varchar(255) DEFAULT NULL,
  upc14 varchar(14) DEFAULT NULL,
  upc12 varchar(12) DEFAULT NULL,
  brand_id int(11) DEFAULT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id));
