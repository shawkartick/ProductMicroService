import { Sequelize } from "sequelize";
import msSQLConfig from "../config/msSQLConfig";

const sequelize = new Sequelize(
  msSQLConfig.dbName,
  msSQLConfig.userName,
  msSQLConfig.password,
  {
    host: msSQLConfig.serverName,
    dialect: msSQLConfig.dialect,
    pool: {
      max: msSQLConfig.pool.max,
      min: msSQLConfig.pool.min,
      acquire: msSQLConfig.pool.acquire,
      idle: msSQLConfig.pool.idle,
    },
  }
);

const db = {};

async function initial(params) {
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.product = require("../models/products").default(sequelize, Sequelize);
  await sequelize.sync({ alter: true });
}
initial();

module.exports = db;
