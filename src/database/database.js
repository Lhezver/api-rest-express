import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "paises", // db name,
  "root", // username
  "", // password
  {
    host: "localhost",
    dialect: "mariadb",
  }
);
