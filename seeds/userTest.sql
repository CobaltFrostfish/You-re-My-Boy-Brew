DROP DATABASE IF EXISTS boybrew_db;
CREATE DATABASE boybrew_db;

USE boybrew_db;

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(26) NOT NULL,
  email VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO user (username, email, password)
VALUES ('test', 'test@test.com', 'password' )