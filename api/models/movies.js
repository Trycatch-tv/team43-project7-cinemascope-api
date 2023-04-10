import { DataTypes } from "sequelize";
import { conectionSequelize } from "../connection/connection-MySQL.js";

export const Movie = conectionSequelize.define("movies", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowIncrements: true,
  },
  title: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: false,
  },
  genres: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  cover_url: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: false,
  },
  trailer_url: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: false,
  },
  release_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  director: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: false,
  },
  synopsis: {
    type: DataTypes.STRING(500),
    allowNull: false,
    unique: false,
  },
  // Timestamps
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});
