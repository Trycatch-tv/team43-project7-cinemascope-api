import genreService from '../services/genreService.js';

const create_genre = async(req, res) => {
    
    let genre = await genreService.create_genre(req, function(err, result) {
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

/**Get all genres */
const get_genres = async(req, res) => {
    let genre = await genreService.get_genres(req, function(err, result) {
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

/**Get genre by id */
const get_genre_by_id = async(req, res) => {
    let genre = await genreService.get_genre_by_id(req, function(err, result) {
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

/**Update genre by id */
const update_genre_by_id = async(req, res) => {
    let genre = await genreService.update_genre_by_id(req, function(err, result) {
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

/**Delete genre by ID */
const delete_genre_by_id = async(req, res) => {
    let genre = await genreService.delete_genre_by_id(req, function(err, result) {
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

const genreController = {
    create_genre,
    get_genres,
    get_genre_by_id,
    update_genre_by_id,
    delete_genre_by_id,
}
export default genreController;