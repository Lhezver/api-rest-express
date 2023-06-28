import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Ciudad } from "./Ciudad.js";

export const Pais = sequelize.define(
  "paises",
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


Pais.hasMany(Ciudad, {
  foreignKey: "paisId",
  sourceKey: "id",
});

Ciudad.belongsTo(Pais, {
  foreignKey: "paisId",
  targetKey: "id",
});
