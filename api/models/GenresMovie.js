import { DataTypes } from "sequelize";
import { conectionSequelize } from "../connection/db.js";

export const reviewMovie = conectionSequelize.define('reviewsMovie', {
  reviewmovie_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  timestamps: false
});