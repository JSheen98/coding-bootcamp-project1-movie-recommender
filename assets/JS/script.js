// Defines getMovies function
function getMovies() {
  // Gets data for movies now playing and sorts by popularity descending
  fetch("https://api.themoviedb.org/3/movie/now_playing?&api_key=2129d479a91cfa69f8540fc782cf615a")
  // Parses response
  .then(function (response) {
    return response.json();
  })
  // Logs array of movies to the console
  .then(function (data) {
    console.log(data.results);
  });
}

// Runs getMovies on page load
getMovies();