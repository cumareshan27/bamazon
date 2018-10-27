-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
  -- Makes a string column called "name" which cannot contain null --
   id INTEGER(11) AUTO_INCREMENT NOT NULL,,
  -- Makes a boolean column called "product_name" which cannot contain null --
  product_name VARCHAR (45) NOT NULL,
  -- Makes a sting column called "department_name" --
  department_name VARCHAR(30),
  -- Makes an numeric column called "price" --
  price FLOAT(10.2),
  -- Makes an numeric column called stock_quantity
  stock_quantity INTEGER(10)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dell Laptop", "electronics", 576.89, 100),
        ("Dell Laptop", "electronics", 576.89, 100),
        ("Dell Laptop", "electronics", 576.89, 100),
        ("Dell Laptop", "electronics", 576.89, 100),
        ("Dell Laptop", "electronics", 576.89, 100),
        ("Dell Laptop", "electronics", 576.89, 100)



-- Updates the row where the column ------- --
UPDATE products
SET product_name = dell, department_name = "electronics"
WHERE ID = 1;