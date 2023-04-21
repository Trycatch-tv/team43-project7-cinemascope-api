import { Review } from "../models/Reviews.js";

import { Op } from "sequelize";
// Create review
const create_review = async function (req, callback) {
  const { movie_id, rating, review } = req.body;

  try {
    await Review.create({
      movie_id,
      rating,
      review,
    });
    callback(null, "Successful review created");
  } catch (err) {
    callback(err);
    return;
  }
};

// Get all reviews
const get_reviews = async function (body, callback) {
  try {
    const reviewsData = await Review.findAll();
    callback(null, reviewsData);
  } catch (err) {
    callback(err);
    return;
  }
};

// Get review by ID
const get_review_by_id = async function (req, callback) {
  try {
    const reviewData = await Review.findByPk(req.params.reviewId);
    if (reviewData == null) {
      callback(`The review with id: ${req.params.reviewId} doesn't exists`);
      return;
    }
    callback(null, reviewData);
  } catch (err) {
    callback(err);
    return;
  }
};

// Update review by ID
const update_review_by_id = async function (req, callback) {
  const { movie_id, rating, review } = req.body;
  try {
    const reviewData = await Review.findByPk(req.params.reviewId);
    if (reviewData == null) {
      callback(`The review with id: ${req.params.reviewId} doesn't exists`);
      return;
    }
    await Review.update(
      {
        movie_id,
        rating,
        review,
      },
      { where: { review_id: req.params.reviewId } }
    );
    callback(null, "Successful review updated");
  } catch (err) {
    callback(err);
    return;
  }
};

// Delete review by ID
const delete_review_by_id = async function (req, callback) {
  try {
    const reviewData = await Review.findByPk(req.params.reviewId);
    if (reviewData == null) {
      callback(`The review with id: ${req.params.reviewId} doesn't exists`);
      return;
    }
    await Review.destroy({ where: { review_id: req.params.reviewId } });
    callback(null, "Successful review deleted");
  } catch (err) {
    callback(err);
    return;
  }
};

const reviewService = {
  create_review,
  get_reviews,
  get_review_by_id,
  update_review_by_id,
  delete_review_by_id,
};

export default reviewService;
