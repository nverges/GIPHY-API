INSTRUCTIONS:

The goal of this exercise is to modify our find queries in both post-api-routes.js and author-api-routes.js to use Sequelize's "include" option. We can use "include" to say that we want to return associated data.

Open the folder slacked out to you

Run npm install

Open the config folder and update the config.json file's development object to match your own local MySQL database.

Navigate to the post-api-routes.js file.

Add the "include" option to the queries specified in the comments. This is a feature called "eager loading". We want to "include" the Author model. Examples can be found here: 

http://docs.sequelizejs.com/manual/tutorial/models-usage.html#eager-loading

Navigate to the author-api-routes.js file and add the "include" option to the queries specified in the comments. Here we want to "include" the Post model.

If successful the application should now be fully functional. After you create a few Authors with a few posts, try navigating to either localhost:8080/api/posts or localhost:8080/api/authors to make sure the JSON returned for both routes includes all of the data.

Hint: The "include" key goes on the same options object as the "where" attribute we've been using. Examples can be found at the link supplied.



