insert into shopping_cart (product_name, product_price) 
select product_name, product_price from inventory
values ($1, $2);


