select product_name, quantity, product_price, total_cost
from shopping_cart
where user_id = $1;