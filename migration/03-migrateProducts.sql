    insert into products (
    product_name,
    upc14,
    upc12,
    brand_id )
select 
    P.name,
    P.upc14,
    P.upc12,
    B.id
FROM
    products_base_01 as P
    inner join brands as B
    on P.brand = B.brand_name;
insert into products (
    product_name,
    upc14,
    upc12,
    brand_id )
select 
    P.name,
    P.upc14,
    P.upc12,
    B.id
FROM
    products_base_02 as P
    inner join brands as B
    on P.brand = B.brand_name;
insert into products (
    product_name,
    upc14,
    upc12,
    brand_id )
select 
    P.name,
    P.upc14,
    P.upc12,
    B.id
FROM
    products_base_03 as P
    inner join brands as B
    on P.brand = B.brand_name;
insert into products (
    product_name,
    upc14,
    upc12,
    brand_id )
select 
    P.name,
    P.upc14,
    P.upc12,
    B.id
FROM
    products_base_04 as P
    inner join brands as B
    on P.brand = B.brand_name;
insert into products (
    product_name,
    upc14,
    upc12,
    brand_id )
select 
    P.name,
    P.upc14,
    P.upc12,
    B.id
FROM
    products_base_05 as P
    inner join brands as B
    on P.brand = B.brand_name;
insert into products (
    product_name,
    upc14,
    upc12,
    brand_id )
select 
    P.name,
    P.upc14,
    P.upc12,
    B.id
FROM
    products_base_06 as P
    inner join brands as B
    on P.brand = B.brand_name;
insert into products (
    product_name,
    upc14,
    upc12,
    brand_id )
select 
    P.name,
    P.upc14,
    P.upc12,
    B.id
FROM
    products_base_07 as P
    inner join brands as B
    on P.brand = B.brand_name;