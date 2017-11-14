CREATE TABLE categories (
  id int(11) NOT NULL AUTO_INCREMENT,
  category_name varchar(255) DEFAULT NULL,
  shopping_group_id int(11);
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id));
