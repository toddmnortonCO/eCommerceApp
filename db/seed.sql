create table if not exists users (
    user_id serial primary key,
    email varchar(100) NOT NULL,
    password varchar(500) NOT NULL
);

create table if not exists inventory (
    product_id serial primary key,
    product_name varchar(100) NOT NULL,
    product_description varchar(500) NOT NULL,
    product_price float(4, 2),
    product_review set(1, 2, 3, 4, 5),
);

create table if not exists shopping_cart (
    order_id serial primary key,
    product_id foreign key references inventory(product_id),
    product_name foreign key references inventory(product_name),
    quantity int,
    product_price float(4, 2) foreign key references inventory(product_price),
    total_cost float(6, 2),
);

create table if not exists order_history (
    select user_id from users
    union all
    select order_id, product_name, total_cost from cart
);
