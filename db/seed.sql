create table if not exists users (
    user_id serial primary key,
    email varchar(100) NOT NULL,
    password varchar(500) NOT NULL
);

