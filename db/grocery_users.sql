CREATE TABLE grocery_users (
  id int(11) NOT NULL AUTO_INCREMENT,
  user_name varchar(255) not null,
  user_email varchar(255),
  shoppinglist_id int(11) not null,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ;