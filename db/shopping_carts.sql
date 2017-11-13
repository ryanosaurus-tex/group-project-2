CREATE TABLE shopping_carts (
  id int(11) NOT NULL AUTO_INCREMENT,
  shopping_group_id int(11),
  cart_name varchar (255),
  date_opened datetime,
  date_closed datetime,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ;	