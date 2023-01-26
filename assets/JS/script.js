// Defines getMovies function
function getMovies() {
  // Gets data for movies now playing and sorts by popularity descending
  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=2129d479a91cfa69f8540fc782cf615a")
  // Parses response
  .then(function (response) {
    return response.json();
  })
  // Logs array of movies to the console
  .then(function (data) {
    console.log(data.results);
  });
}

/* ​
Genre ID list:

Action - id: 28
Adventure - id: 12
Animation - id: 16
Comedy - id: 35
Crime - id: 80
Documentary - id: 99
Drama - id: 18
Family - id: 10751
Fantasy - id: 14
History - id: 36
Horror - id: 27
Music - id: 10402
Mystery - id: 9648
Romance - id: 10749
Science Fiction - id: 878
TV Movie -​​ id: 10770
Thriller - id: 53
War - id: 10752
Western - id: 37
*/

// Declares function variables in global scope and defines them as empty
var genreSelection = "";
var filterResults = [];

// Defines filterGenre function
function filterGenre(genreSelection) {
  // Clears filterResults from previous runs
  filterResults = [];
  // Gets first page of movie data sorted by popularity descending
  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=2129d479a91cfa69f8540fc782cf615a")
  // Parses response into objects and arrays
  .then(function (response) {
    return response.json();
  })
  // Pushes movies matching the selected genre to filterResults
  .then(function (data) {
    for (i = 0; i < 19; i++) {
      if (data.results[i].genre_ids.includes(genreSelection)) {
        filterResults.push(data.results[i]);
      }
    }
  });
}

// Runs getMovies on page load
getMovies();