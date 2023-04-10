import { Router } from 'express'
import movieController from '../controllers/movieController.js'

const route = Router();
//---- Movies module
route.post('/movies/admin', movieController.create_movie);
route.get('/movies/admin',movieController.get_movies);
route.get('/movies/:movieId', movieController.get_movie_by_id);
route.put('/movies/admin/:movieId', movieController.update_movie_by_id);
route.delete('/movies/admin/:movieId', movieController.delete_movie_by_id);

export default route;