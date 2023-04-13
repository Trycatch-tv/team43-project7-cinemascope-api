import reviewService from '../services/reviewService.js';

const create_review = async(req, res) => {
    
    let review = await reviewService.create_review(req, function(err, result) {
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

/**Get all reviews */
const get_reviews = async(req, res) => {
    let review = await reviewService.get_reviews(req, function(err, result) {
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

/**Get reviews by id */
const get_review_by_id = async(req, res) => {
    let review = await reviewService.get_review_by_id(req, function(err, result) {
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

/**Update review by id */
const update_review_by_id = async(req, res) => {
    let review = await reviewService.update_review_by_id(req, function(err, result) {
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

/**Delete review by ID */
const delete_review_by_id = async(req, res) => {
    let review = await reviewService.delete_review_by_id(req, function(err, result) {
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

const reviewController = {
    create_review,
    get_reviews,
    get_review_by_id,
    update_review_by_id,
    delete_review_by_id,
}
export default reviewController;