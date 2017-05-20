//////////// VARIABLES ////////////////////////////////////////////////////////////////////////

// gif search parameters (buttons)
var gifs = ["Dogs", "Cats", "Baby Elephants", "Pandas", "Cheese", "Cookies", "Cake", "Ice Cream", "Ninja", "People Falling Over", 
"Rick Rolled", "Rage Faces", "Donald Drumpf", "Money", "Computers", "Pineapples", "Bananas in Pajamas", "Leeroy Jenkins", "Nyan Cat"];


//////////// FUNCTIONS ////////////////////////////////////////////////////////////////////////

// grabs gif from server, applies attributes, and appends to html
function displayGif() {

  // clears gifDiv
  $("#gifs-view").empty();

 	var person = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
  person + "&api_key=dc6zaTOxFJmzC&limit=10";

  // AJAX call for the specific gifButton being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    console.log(response);

    // Creates a div to hold the gifs
    var gifDiv = $("<div class='gifs'>");

    // Pull Information
    for (i=0; i<response.data.length; i++) {	

      // Rating Information

          // Retrieves the Rating Data
          var rating = response.data[i].rating;

          // Creates an element to have the rating displayed
          var ratingDisplay = $("<p>").text("Rating: " + rating);

      // Image Information

          // Retrieving the URL for the image
          var imgPath = response.data[i].images

          // Creates an element to hold the image
          var image = $("<img>");
            image.attr("class", "gif");
            image.attr("src", imgPath.fixed_height_still.url);
	          image.attr("data-still", imgPath.fixed_height.url);
            image.attr("data-animate", imgPath.fixed_height_still.url);

      // populates div with rating and image
      gifDiv.append(ratingDisplay);
      gifDiv.append(image);

	  };

    // display gifDiv to HTML
    $("#gifs-view").prepend(gifDiv);

  });

}

// creates buttons
function renderButtons() {

  // Deletes the gifs prior to displaying new gifs
  $("#buttons-view").empty();

  // Loops through the array of gifs
  for (var i = 0; i < gifs.length; i++) {

    // Then dynamicaly generates a button for each gif search parameter in the array
    var a = $("<button>");
    // Adds a class of gifButton to our button
    a.addClass("gifButton");
    // Added a data-attribute
    a.attr("data-name", gifs[i]);
    // Provided the initial button text
    a.text(gifs[i]);
    // Added the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}


// function starts and stop gif animation
function pauseGif() {

  // Make a variable named state and then store the image's data-state into it
  // Use the .attr() method for this
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

} 


//////////// CLICK EVENTS ////////////////////////////////////////////////////////////////////////

// This function handles click event on ADD button
$("#add-gif").on("click", function(event) {

  // allows enter button to be pressed
  event.preventDefault();

  // Grab input from textbox
  var gifInput = $("#gif-input").val().trim();

  // The desired gif from the textbox is then added to array of gifs
  gifs.push(gifInput);

  // Calling renderButtons function which handles processing gifs array into buttons
  renderButtons();

});



// Global event listeners

    // Adding click event listeners to buttons
    $(document).on("click", ".gifButton", displayGif);

    $(document).on("click", ".gif", pauseGif);



//////////// MAIN PROCESS ////////////////////////////////////////////////////////////////////////

// Calling the renderButtons function to display the intial buttons
renderButtons();



