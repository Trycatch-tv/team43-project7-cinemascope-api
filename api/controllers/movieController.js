import movieService from '../services/movieService.js';

const create_movie = async(req, res) => {
    
    let movie = await movieService.create_movie(req, function(err, result) {
        if (err) {
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        })
    });
}

/**Get all movies */
const get_movies = async(req, res) => {
    let movie = await movieService.get_movies(req, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        });
    });
}

/**Get movie by id */
const get_movie_by_id = async(req, res) => {
    let movie = await movieService.get_movie_by_id(req, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        });
    });
}

/**Update movie by id */
const update_movie_by_id = async(req, res) => {
    let movie = await movieService.update_user_by_id(req, function(err, result) {
        if (err) {
                return res.status(400).json({
                    success: false,
                    body: err
                });
        }
        return res.status(200).json({
            success: true,
            body: result
        })
    });
}

/**Delete movie by ID */
const delete_movie_by_id = async(req, res) => {
    let movie = await movieService.delete_movie_by_id(req, function(err, result) {
        if (err) {
                return res.status(400).json({
                    success: false,
                    body: err
                });
        }
        return res.status(200).json({
            success: true,
            body: result
        })
    });
}

const movieController = {
    create_movie,
    get_movies,
    get_movie_by_id,
    update_movie_by_id,
    delete_movie_by_id,
}
export default movieController;