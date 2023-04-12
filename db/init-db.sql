CREATE DATABASE CinemaScopeDB;
USE CinemaScopeDB;

CREATE TABLE `Movies` (
  `movie_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `cover_url` VARCHAR(255) NOT NULL,
  `trailer_url` VARCHAR(255) NOT NULL,
  `release_date` DATE NOT NULL,
  `directed_by` VARCHAR(255) NOT NULL,
  `synopsis` VARCHAR(255) NOT NULL
);

CREATE TABLE `Genres` (
  `genre_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `GenresMovie` (
  `genremovie_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `movie_id` INT NOT NULL,
  `genre_id` INT NOT NULL
);

CREATE TABLE `Reviews` (
  `review_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `movie_id` INT NOT NULL,
  `rating` FLOAT DEFAULT NULL,
  `review` VARCHAR(255) NOT NULL
);

ALTER TABLE `GenresMovie` ADD FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`movie_id`);

ALTER TABLE `GenresMovie` ADD FOREIGN KEY (`genre_id`) REFERENCES `Genres` (`genre_id`);

ALTER TABLE `Reviews` ADD FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`movie_id`);