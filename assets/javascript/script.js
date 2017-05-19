
      // Initial array of GIFS
      var gifs = ["Dogs", "Cats", "Baby Elephants", "Pandas", "Cheese", "Cookies", "Cake", "Ice Cream", "Gelato", "Ninja", "People Falling Over", "Rick Rolled", "Rage Faces", "Donald Drumpf"];


      // grabs gif from server, applies attributes, and appends to html
      function displayGif() {

       	var person = $(this).attr("data-name");
        // var movie = $(this).attr("data-name");
      	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          console.log(response);

          // Creates a div to hold the movie
          var movieDiv = $("<div class='movies'>");


          // pull data
          for (i=0; i<response.data.length; i++) {	

	          // Retrieves the Rating Data
	          var rating = response.data[i].rating;

	          // Creates an element to have the rating displayed
	          var pOne = $("<p>").text("Rating: " + rating);

	          // Displays the rating
	          movieDiv.append(pOne);


	          // Retrieving the URL for the image
	          var imgURL = response.Poster;

	          // Creates an element to hold the image
	          var image = $("<img>");
	          image.attr("src", response.data[i].images.fixed_height.url);
		      image.attr("data-still", response.data[i].images.fixed_height_still.url);
              image.attr("data-animate", response.data[i].images.fixed_height.url);
              image.attr("data-state", "still");
              image.attr("class", "gif");


	          // Appends the image
	          movieDiv.append(image);
      	  };


          // clears gif window and prepends the entire movieDiv
          $("#movies-view").empty();
          $("#movies-view").append(movieDiv);

        });

      }

      // creates buttons
      function renderButtons() {

        // Deletes the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Loops through the array of movies
        for (var i = 0; i < gifs.length; i++) {

          // Then dynamicaly generates buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("movie");
          // Added a data-attribute
          a.attr("data-name", gifs[i]);
          // Provided the initial button text
          a.text(gifs[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }


      // This function handles events where the add movie button is clicked
      $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var movie = $("#gif-input").val().trim();

        // The movie from the textbox is then added to our array
        gifs.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });


      // Adding click event listeners to all elements with a class of "movie"
      $(document).on("click", ".movie", displayGif);



    $(".movie").on("click", function() {
      // STEP ONE: study the html above.
      // Look at all the data attributes.
      // Run the file in the browser. Look at the images.

      // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

      // STEP TWO: make a variable named state and then store the image's data-state into it.
      // Use the .attr() method for this.

      // ============== FILL IN CODE HERE FOR STEP TWO =========================

      var state = $(this).attr("data-state");


      if (state == "still") {
        var x = $(this).attr("data-animate");
        $(this).attr("src", x);
        $(this).attr("data-state", "animate");
      } else {
        var x = $(this).attr("data-still");
        $(this).attr("src", x);
        $(this).attr("data-state", "still");
      }

      // displayGif();

    });


      // Calling the renderButtons function to display the intial buttons
      renderButtons();