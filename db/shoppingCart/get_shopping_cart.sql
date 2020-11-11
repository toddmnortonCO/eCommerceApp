select product_name, product_price
from shopping_cart
where user_id = $1;