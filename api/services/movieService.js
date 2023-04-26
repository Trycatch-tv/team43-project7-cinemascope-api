import { Movie } from "../models/movies.js";
import { GenreMovie } from "../models/GenresMovie.js";
import { Review } from "../models/Reviews.js";

import { Op } from "sequelize";
// Create movie
const create_movie = async function (req, callback) {
  const { title, cover_url, trailer_url, release_date, directed_by, synopsis } =
    req.body;

  try {
    await Movie.create({
      title,
      cover_url,
      trailer_url,
      release_date,
      directed_by,
      synopsis,
      //   token: req.body.titulo + req.body.genero,
    });
    callback(null, "Successful movie created");
  } catch (err) {
    callback(err);
    return;
  }
};

// Get all movies
const get_movies = async function (body, callback) {
  try {
    const moviesData = await Movie.findAll();
    callback(null, moviesData);
  } catch (err) {
    callback(err);
    return;
  }
};

// Get movie by ID
const get_movie_by_id = async function (req, callback) {
  try {
    console.log(req.params.movieId)
    const movieData = await Movie.findByPk(req.params.movieId);
    if (movieData == null) {
      callback(`The movie with id: ${req.params.movieId} doesn't exists`);
      return;
    }
    callback(null, movieData);
  } catch (err) {
    callback(err);
    return;
  }
};

// Update movie by ID
const update_movie_by_id = async function (req, callback) {
  console.log('hello world')
  const { title, cover_url, trailer_url, release_date, directed_by, synopsis } =
    req.body;
  try {
    const movieData = await Movie.findByPk(req.params.movieId);
    if (movieData == null) {
      callback(`The movie with id: ${req.params.movieId} doesn't exists`);
      return;
    }
    await Movie.update(
      {
        title,
        cover_url,
        trailer_url,
        release_date,
        directed_by,
        synopsis,
        // token: req.body.titulo + req.body.genero,
      },
      { where: { movie_id: req.params.movieId } }
    );
    callback(null, "Successful movie updated");
  } catch (err) {
    callback(err);
    return;
  }
};

// Delete movie by ID
const delete_movie_by_id = async function (req, callback) {
  try {
    const movieData = await Movie.findByPk(req.params.movieId);
    if (movieData == null) {
      callback(`The movie with id: ${req.params.movieId} doesn't exists`);
      return;
    }
    await GenreMovie.destroy({ where: { movie_id: req.params.movieId } });
    await Review.destroy({ where: { movie_id: req.params.movieId } });
    await Movie.destroy({ where: { movie_id: req.params.movieId } });
    callback(null, "Successful movie deleted");
  } catch (err) {
    callback(err);
    return;
  }
};

const movieService = {
  create_movie,
  get_movies,
  get_movie_by_id,
  update_movie_by_id,
  delete_movie_by_id,
};

export default movieService;
