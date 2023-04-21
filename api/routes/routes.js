import { Router } from 'express'
import movieController from '../controllers/movieController.js'
import reviewController from '../controllers/reviewController.js'
import genreController from '../controllers/genreController.js'


const route = Router();
//---- Movies module
route.post('/movies/admin', movieController.create_movie);
route.get('/movies',movieController.get_movies);
route.get('/movies/:movieId', movieController.get_movie_by_id);
route.put('/movies/admin/:movieId', movieController.update_movie_by_id);
route.delete('/movies/admin/:movieId', movieController.delete_movie_by_id);

//---- Genres module
route.post('/genres/admin', genreController.create_genre);
route.get('/genres/admin',genreController.get_genres);
route.get('/genres/:genreId', genreController.get_genre_by_id);
route.put('/genres/admin/:genreId', genreController.update_genre_by_id);
route.delete('/genres/admin/:genreId', genreController.delete_genre_by_id);

//---- Reviews module
route.post('/reviews/admin', reviewController.create_review);
route.get('/reviews/admin',reviewController.get_reviews);
route.get('/reviews/:reviewId', reviewController.get_review_by_id);
route.delete('/reviews/admin/:reviewId', reviewController.delete_review_by_id);

export default route;