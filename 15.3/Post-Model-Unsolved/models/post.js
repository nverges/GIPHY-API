module.exports = function(sequelize, DataTypes) {
 // Add code here to create a Post model
 // This model needs a title, a body, and a category
 // Don't forget to 'return' the post after defining

	var postEntry = sequelize.define("Posts", {
	    title: {
	    	type: DataTypes.STRING, // varchar(255)
	    	allowNull: false,
	    	validate: {
	    		len: [0, 160]
	    	}
	    },
	    body: {
	    	type: DataTypes.TEXT, // boundless. unlimited. no limit. no upper bound.
	    	allowNull: false,
	    	validate: {
	    		len: [1]
	    	}
	    },
	    category: {
	    	type: DataTypes.STRING,
	    	defaultValue: 'Personal'
	    }
	});
	return postEntry;
};

