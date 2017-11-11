USE groceries_db;

INSERT INTO grocery_users (user_name, user_email, shoppinglist_id)
	VALUES ('David','david.staas@outlook.com',1);

INSERT INTO shopping_groups (group_name) 
	VALUES ('The Cool Group');

INSERT INTO shopping_carts (shopping_group_id, cart_name) VALUES (1, "Tom Thumb");

INSERT INTO categories (category_name) 
	VALUES ('Condiments');
INSERT INTO categories (category_name) 
	VALUES ('Cleaning Supplies');
INSERT INTO categories (category_name) 
	VALUES ('Coffee/Tea');
INSERT INTO categories (category_name) 
	VALUES ('Breads');
INSERT INTO categories (category_name) 
	VALUES ('Spices');
INSERT INTO categories (category_name) 
	VALUES ('Pasta');
INSERT INTO categories (category_name) 
	VALUES ('Produce');


-- Add more here once the data's all loaded
INSERT INTO shoppinglist_items (shopping_cart_id, product_name, product_id, category_id, 
			category_name, brand_id, brand_name, comments)
	VALUES (1, 'Riceland American Jazmine Rice', 1, 6,'Pasta',1,'Riceland','Get the 10 lb. size');
INSERT INTO shoppinglist_items (shopping_cart_id, product_name, product_id, category_id, 
			category_name, brand_id, brand_name, comments)
	VALUES (1, 'Ahold Kale Greens',1495,4,'Produce',4,null,'Not the marshmallow kind, please!');

-- Add more here once the data's all loaded
INSERT INTO list_favorites (shopping_group_id, product_name, product_id, brand_id, brand_name,
			category_id, category_name,comments)
	values (1, 'Ahold Kale Greens',1495,null, null,4, 'Produce','Not the marshmallow kind, please!');
