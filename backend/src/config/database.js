const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("inventario_usmp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
