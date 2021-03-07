DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

-- --  * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL, 
    burger_name varchar (60) NOT NULL, 
    devoured BOOLEAN NOT NULL, 
    PRIMARY KEY (id)
);