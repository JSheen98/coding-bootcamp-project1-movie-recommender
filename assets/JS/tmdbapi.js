// Defines apiKey variable
var apiKey = '2129d479a91cfa69f8540fc782cf615a';

// Defines element variables
var container1El = document.getElementById("container1");
var container2El = document.getElementById("container2");
var optionEl = document.querySelectorAll(".option");
var row2TitleEl = document.getElementById("row2Title");
var top10El = document.getElementById("top10");

// Defines topMovies function
function topMovies() {
  // Gets data for movies now playing and sorts by popularity descending
  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey)
  // Parses response
  .then(function (response) {
    return response.json();
  })
  // Logs array of movies to the console
  .then(function (data) {
    // Sets row 1 to display the posters of the movies from the results
    for (i = 0; i < container1El.children[0].children.length; i++) {
      container1El.children[0].children[i].children[0].setAttribute("style", "background-image: url('https://image.tmdb.org/t/p/original" + data.results[i].poster_path + "');");
    }
    // Sets text for row 2 title
    row2TitleEl.textContent = "Next Top 5";
    // Sets row 2 to display more of the posters of the movies from the results
    for (i = 0; i < container2El.children[0].children.length; i++) {
      container2El.children[0].children[i].children[0].setAttribute("style", "background-image: url('https://image.tmdb.org/t/p/original" + data.results[i + 5].poster_path + "');");
    }
  });
}

// Runs topMovies function on page load
topMovies();

// Clicking the Top 10 option reruns the topMovies function
top10El.addEventListener("click", function() {
  topMovies();
});

// Defines initial variables for following functions
var filteredResults = [];
var page = 1;
var pagesTotal = 50;
var genreSelection = 10751

// Genres in the sidebar list are given events on click
for (var i = 0; i < optionEl.length; i++) {
  optionEl[i].addEventListener("click", function() {
    // Row 2 Title is set to selected genre
    row2TitleEl.textContent = "Top 5 " + this.textContent + " Movies Now Playing in Theaters";
    // genreSelection variable is set to the corresponding TMDB genre id
    genreSelection = parseInt(this.getAttribute("id"));
    console.log(genreSelection);
    // Runs clearFilter function
    clearFilter();
  })
}

// Defines clearFilter function. For when running the filter functions multiple times
function clearFilter() {
  // Clears filteredResults array
  filteredResults = [];
  // Clears poster images from cards
  console.log(container2El.children[0].children);
  for (i = 0; i < container2El.children[0].children.length; i++) {
    container2El.children[0].children[i].children[0].setAttribute("style", "background-image: none;");
  }
  // Sets page to 1
  page = 1;
  // Runs getPage function
  getPage();
}

// Defines getPage function and makes it asynchronous
async function getPage() {
  // Gets a page of data for movies now playing sorted by popularity descending
  var response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey + "&page=" + page);
  // Parses response into objects and arrays
  var data = await response.json();
  // Parsed data is passed as the argument in the filterResults function
  filterResults(data);
}
  
// Defines filterResults function
function filterResults(data) {
  // Checks for valid data
  if (data.results) {
    // Pushes movies matching the selected genre to the filteredResults array
    for (i = 0; i < 19; i++) {
      // Checks for valid results
      if (!data.results[i]) {
        // Sets second row of cards to display the posters of movies from the filtered results
        console.log(container2El.children[0].children);
        for (i = 0; i < container2El.children[0].children.length; i++) {
          container2El.children[0].children[i].children[0].setAttribute("style", "background-image: url('https://image.tmdb.org/t/p/original" + filteredResults[i].poster_path + "');");
        }
        return
      }
      else if (data.results[i].genre_ids.includes(genreSelection)) {
        filteredResults.push(data.results[i]);
      }
    }
    // Logs filteredResults array to the console
    console.log(filteredResults);
    // Checks if length of filteredResults array is less than 5
    if (filteredResults.length < 5) {
      // Checks if current page is less than total pages
      pagesTotal = data.total_pages;
      if (page < pagesTotal) {
        // Runs getPage function again for next page
        page++;
        console.log(page)
        getPage();
      }
      else {
        // Sets second row of cards to display the posters of movies from the filtered results
        console.log(container2El.children[0].children);
        for (i = 0; i < container2El.children[0].children.length; i++) {
          container2El.children[0].children[i].children[0].setAttribute("style", "background-image: url('https://image.tmdb.org/t/p/original" + filteredResults[i].poster_path + "');");
        }
      }
    }
    else {
      // Sets second row of cards to display the posters of movies from the filtered results
      console.log(container2El.children[0].children);
      for (i = 0; i < container2El.children[0].children.length; i++) {
        container2El.children[0].children[i].children[0].setAttribute("style", "background-image: url('https://image.tmdb.org/t/p/original" + filteredResults[i].poster_path + "');");
      }
    }
  }
  else {
    console.log("filterResults function failure")
    return
  }
}
