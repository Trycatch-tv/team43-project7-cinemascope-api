import { DataTypes } from "sequelize";
import { conectionSequelize } from "../connection/db.js";

export const GenreMovie = conectionSequelize.define('GenresMovie', {
  genremovie_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  freezeTableName: true,
  timestamps: false
});