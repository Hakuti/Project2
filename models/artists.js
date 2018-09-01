module.exports = function(sequelize, DataTypes) {
  var top_artists = sequelize.define(
    "artists",
    {
      artist_name: DataTypes.STRING,
      genre: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return top_artists;
};
