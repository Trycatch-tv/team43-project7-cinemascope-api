import { DataTypes } from "sequelize";
import { conectionSequelize } from "../connection/db.js";

export const Genre = conectionSequelize.define('Genres', {
  genre_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  timestamps: false
});
