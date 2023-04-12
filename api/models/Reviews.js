import { DataTypes } from "sequelize";
import { conectionSequelize } from "../connection/db.js";

export const Review = conectionSequelize.define('Reviews', {
  review_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: null
  },
  review: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  timestamps: false
});