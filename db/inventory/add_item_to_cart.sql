insert into shopping_cart (product_id, product_name, product_price) 
select product_id, product_name, product_price from inventory;
