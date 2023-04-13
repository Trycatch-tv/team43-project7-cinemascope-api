import { review } from './reviews.js'
import { reviewMovie } from './reviewsMovie.js'
import { Movie } from './Movies.js'
import { Review } from './Reviews.js'

reviewMovie.belongsTo(Movie, { foreignKey: 'movie_id' });
reviewMovie.belongsTo(review, { foreignKey: 'review_id' });
Review.belongsTo(Movie, { foreignKey: 'movie_id' });