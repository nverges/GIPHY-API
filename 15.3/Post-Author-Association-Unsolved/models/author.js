module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  // when an author is deleted, you should delete the posts automatically
  Author.associate = function(models) {
  	Author.hasMany(models.Post, {
		onDelete: "cascade"
	});
  };

  return Author;
};

