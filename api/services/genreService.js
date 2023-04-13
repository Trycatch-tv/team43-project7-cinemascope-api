import { genre } from "../models/genres.js";

import { Op } from "sequelize";
// Create genre
const create_genre = async function (req, callback) {
  const { name } = req.body;

  try {
    await genre.create({
      name,
    });
    callback(null, "Successful genre created");
  } catch (err) {
    callback(err);
    return;
  }
};

// Get all genres
const get_genres = async function (body, callback) {
  try {
    const genresData = await genre.findAll();
    callback(null, genresData);
  } catch (err) {
    callback(err);
    return;
  }
};

// Get genre by ID
const get_genre_by_id = async function (req, callback) {
  try {
    const genreData = await genre.findAll({
      where: { genre_id: { [Op.like]: `%${req.params.genreId}` } },
    });
    if (Object.keys(genreData).length === 0) {
      callback(`The genre with id: ${req.params.genreId} doesn't exists`);
      return;
    }
    callback(null, genreData);
  } catch (err) {
    callback(err);
    return;
  }
};

// Update genre by ID
const update_genre_by_id = async function (req, callback) {
  const { name } = req.body;
  try {
    const genreData = await genre.findAll({
      where: { genre_id: { [Op.like]: `%${req.params.genreId}` } },
    });
    if (Object.keys(genreData).length === 0) {
      callback(`The genre with id: ${req.params.genreId} doesn't exists`);
      return;
    }
    await genre.update(
      {
        name,
      },
      { where: { genre_id: req.params.genreId } }
    );
    callback(null, "Successful genre updated");
  } catch (err) {
    callback(err);
    return;
  }
};

// Delete genre by ID
const delete_genre_by_id = async function (req, callback) {
  try {
    const genreData = await genre.findAll({
      where: { genre_id: { [Op.like]: `%${req.params.genreId}` } },
    });
    if (Object.keys(genreData).length === 0) {
      callback(`The genre with id: ${req.params.genreId} doesn't exists`);
      return;
    }
    await genre.destroy({ where: { genre_id: req.params.genreId } });
    callback(null, "Successful genre deleted");
  } catch (err) {
    callback(err);
    return;
  }
};

const genreService = {
  create_genre,
  get_genres,
  get_genre_by_id,
  update_genre_by_id,
  delete_genre_by_id,
};

export default genreService;
