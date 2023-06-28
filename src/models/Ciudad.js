import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Ciudad = sequelize.define(
  "ciudades",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    habitantes: {
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: false,
  }
);
