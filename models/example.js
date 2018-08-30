module.exports = function(sequelize, DataTypes) {
  var testdb = sequelize.define("test", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return testdb;
};
