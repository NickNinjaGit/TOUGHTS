const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts1", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connected to Database");
} catch (err) {
  console.log(`Cant connect to db: ${err}`);
}

module.exports = sequelize;
