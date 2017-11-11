update brands as B 
	inner join brands_base as BRB
    on B.brand_name = BRB.Brand
set 
	B.manufacturer_name = BRB.Manufacturer,
    B.full_address = BRB.Address,
    B.website = BRB.Website;

-- Note: if the update keeps timing out, refer to:
-- https://stackoverflow.com/questions/10563619/error-code-2013-lost-connection-to-mysql-server-during-query