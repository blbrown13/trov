CREATE DATABASE IF NOT EXISTS trov;

USE trov;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  facebookId VARCHAR(100) UNIQUE,
  email VARCHAR(75) UNIQUE
);

CREATE TABLE IF NOT EXISTS trovs (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) UNIQUE,
  createdBy INT,
  numberOfUsers VARCHAR(10),
  currentProgress INT,
  challenges VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS users_trovs (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  trovId INT,
  currentChallenge INT,
  totalChallenges INT,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (trovId) REFERENCES trovs(id)
);

CREATE TABLE IF NOT EXISTS challenges (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) UNIQUE,
  hint VARCHAR(50),
  challengeNum INT(255),
  latitude VARCHAR(100),
  longitude VARCHAR(100),
  reward VARCHAR(100)
);
