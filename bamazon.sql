DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE BAMAZON_db;

CREATE TABLE products (

position INT(10)  AUTO_INCREMENT NOT NULL,

product_name VARCHAR(50) NOT NULL,

department_name VARCHAR(50) NOT NULL,

price DECIMAL (10,2) NOT NULL,

stock_quantity INT (10) NOT NULL,

PRIMARY KEY (position)

);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Air Jordan 1 Bred Toe", "Shoes", 299.99, 10),
("Supreme Box Logo Hoodie", "Clothes", 999.99, 2),
("Air Jordan 11 Space Jam", "Shoes", 250.00, 20),
("Off White T-Shirt", "Clothes", 100.00, 10),
("HydroFlask 32oz", "Accessories", 30.00, 30),
("Pioneer DDJ-SB", "Electronics", 250.00, 15),
("Playstation 4", "Electronics", 299.99, 100),
("Adidas Yeezy 350 v2", "Shoes", 349.99, 25),
("Air Jordan 1 Shadow", "Shoes", 249.00, 30),
("Iphone 7 Pluse Case", "Accessories", 29.99, 100);

SELECT * FROM products;