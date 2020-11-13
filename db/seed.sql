create table if not exists users (
    user_id serial primary key,
    email varchar(100) NOT NULL UNIQUE,
    password varchar(500) NOT NULL
);

create table if not exists inventory (
    product_id serial primary key UNIQUE,
    product_name varchar(100) NOT NULL UNIQUE,
    product_description varchar(500) NOT NULL,
    product_price decimal(6, 2),
    product_review varchar(500)
);

create table if not exists shopping_cart (
    user_id int,
    order_id serial primary key,
    product_id int references inventory(product_id),
    product_name varchar(100),
    product_price int
);