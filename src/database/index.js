const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Bootcamp = require("../models/Bootcamp");

const connection = new Sequelize(dbConfig);

Bootcamp.init(connection);

module.exports = connection;

//listem on: http://localhost:3333/
