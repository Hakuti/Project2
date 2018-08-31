module.exports = function(sequelize, DataTypes) {
  var testdb = sequelize.define(
    "artists",
    {
      artist_name: DataTypes.STRING,
      genre: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return testdb;
};
