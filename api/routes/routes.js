import { Router } from 'express'
import movieController from '../controllers/movieController.js'
import reviewController from '../controllers/reviewController.js'

const route = Router();
//---- Movies module
route.post('/movies/admin', movieController.create_movie);
route.get('/movies/admin',movieController.get_movies);
route.get('/movies/:movieId', movieController.get_movie_by_id);
route.put('/movies/admin/:movieId', movieController.update_movie_by_id);
route.delete('/movies/admin/:movieId', movieController.delete_movie_by_id);

//---- Generes module
route.post('/reviews/admin', reviewController.create_review);
route.get('/reviews/admin',reviewController.get_reviews);
route.get('/reviews/:reviewId', reviewController.get_review_by_id);
route.put('/reviews/admin/:reviewId', reviewController.update_review_by_id);
route.delete('/reviews/admin/:reviewId', reviewController.delete_review_by_id);

//---- Reviews module
route.post('/reviews/admin', reviewController.create_review);
route.get('/reviews/admin',reviewController.get_reviews);
route.get('/reviews/:reviewId', reviewController.get_review_by_id);
route.delete('/reviews/admin/:reviewId', reviewController.delete_review_by_id);

export default route;