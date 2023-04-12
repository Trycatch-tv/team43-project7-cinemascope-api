import { DataTypes } from "sequelize";
import { conectionSequelize } from "../connection/db.js";

export const Movie = conectionSequelize.define('Movies', {
  movie_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  cover_url: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  trailer_url: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  release_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  directed_by: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  synopsis: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  timestamps: false
});