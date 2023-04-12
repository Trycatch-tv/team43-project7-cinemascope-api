import { Genre } from './Genres.js'
import { GenreMovie } from './GenresMovie.js'
import { Movie } from './Movies.js'
import { Review } from './Reviews.js'

GenreMovie.belongsTo(Movie, { foreignKey: 'movie_id' });
GenreMovie.belongsTo(Genre, { foreignKey: 'genre_id' });
Review.belongsTo(Movie, { foreignKey: 'movie_id' });