INSTRUCTIONS:

The goal of this exercise is to create a Post model using Sequelize.

Open the folder slacked out to you, run npm install

Create a new MySQL database and name it blogger. Don't create any tables.

Open the config folder and update the config.json file's development object to match your own local MySQL database.

Go to the models folder and open the post.js file.

Create a Sequelize Post model here. The model should have a title property of type DataTypes.STRING, a body property of DataTypes.TEXT, and a category property of DataTypes.STRING. (http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types)

To check if this worked, run node server in your terminal. Then open MySQL Workbench to check if a Posts table has been created.

Note: We still have some code to add in the next exercise to get this app fully functioning, just concentrate on creating the Post model and verifying that you were successful for now.

BONUS

If you complete the activity before time's up, try adding the following:

Flags to the title and body to prevent NULL values from being entered.

A validation to the title so that it must be between 1 and 160 characters.

A validation to the body so that it must be at least 1 character long.

A flag to the category so that it has a default value of "Personal" if a value is not supplied.