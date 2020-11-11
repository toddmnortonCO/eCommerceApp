insert into shopping_cart (user_id, product_id, product_name, product_price)
values ($1, $2, $3, $4);

select * from shopping_cart where user_id = $1;