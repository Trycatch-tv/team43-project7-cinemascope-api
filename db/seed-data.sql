INSERT INTO Movies (title, cover_url, trailer_url, release_date, directed_by, synopsis)
VALUES
("The Shawshank Redemption", "https://www.example.com/shawshank_redemption_cover.jpg", "https://www.example.com/shawshank_redemption_trailer.mp4", "1994-09-23", "Frank Darabont", "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."),
("The Godfather", "https://www.example.com/godfather_cover.jpg", "https://www.example.com/godfather_trailer.mp4", "1972-03-24", "Francis Ford Coppola", "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."),
("The Dark Knight", "https://www.example.com/dark_knight_cover.jpg", "https://www.example.com/dark_knight_trailer.mp4", "2008-07-18", "Christopher Nolan", "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."),
("Schindler's List", "https://www.example.com/schindlers_list_cover.jpg", "https://www.example.com/schindlers_list_trailer.mp4", "1993-11-30", "Steven Spielberg", "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."),
("The Lord of the Rings: The Return of the King", "https://www.example.com/lotr_return_of_the_king_cover.jpg", "https://www.example.com/lotr_return_of_the_king_trailer.mp4", "2003-12-17", "Peter Jackson", "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."),
("Forrest Gump", "https://www.example.com/forrest_gump_cover.jpg", "https://www.example.com/forrest_gump_trailer.mp4", "1994-07-06", "Robert Zemeckis", "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.");

INSERT INTO Genres (name)
VALUES
("Drama"),
("Crime"),
("Action"),
("War"),
("Adventure");

INSERT INTO GenresMovie (movie_id, genre_id)
VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(3, 3),
(3, 4),
(4, 1),
(4, 4),
(5, 1),
(5, 3),
(5, 5),
(6, 1),
(6, 2);

INSERT INTO Reviews (movie_id, rating, review)
VALUES
(1, 9.3, "The Shawshank Redemption is a must-see movie for all film enthusiasts. It's a touching story of friendship and hope that will leave you feeling uplifted."),
(2, 9.2, "The Godfather is a classic movie that tells a captivating story about the mafia. The characters are well developed, and the acting is superb."),
(3, 9.0, "The Dark Knight is a thrilling action-packed movie that is both entertaining and thought-provoking. Heath Ledger's performance as the Joker is outstanding."),
(4, 8.9, "Schindler's List is a powerful and emotional movie that tells the true story of a man who saved many Jews during the Holocaust."),
(5, 9.0, "The Lord of the Rings: The Return of the King is a stunning conclusion to a great trilogy. The battles are epic, and the characters are well developed."),
(6, 8.8, "Forrest Gump is a heartwarming movie that teaches us to never give up on our dreams. Tom Hanks gives a fantastic performance as the lovable Forrest Gump.");