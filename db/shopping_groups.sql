CREATE TABLE shopping_groups (
  id int(11) NOT NULL AUTO_INCREMENT,
  group_name varchar (255),
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ;