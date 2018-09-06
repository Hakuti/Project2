module.exports = function(sequelize, DataTypes) {
  var top_artists = sequelize.define(
    "artists",
    {
      artist_name: DataTypes.STRING,
      genre: DataTypes.STRING,
      song_name: DataTypes.STRING,
      album_name: DataTypes.STRING,
      song_url: DataTypes.STRING,
      album_image_url: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return top_artists;
};
