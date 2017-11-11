CREATE TABLE brands (
  id int(11) NOT NULL AUTO_INCREMENT,
  brand_name varchar(255) DEFAULT NULL,
  manufacturer_name varchar(255), 
  full_address varchar(255),
  website varchar (255),
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ;