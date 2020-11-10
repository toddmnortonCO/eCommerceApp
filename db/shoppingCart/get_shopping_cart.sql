select product_name, quantity, product_price, total_cost
from shopping_cart s
union 
select user_id from users
where user_id = $1;