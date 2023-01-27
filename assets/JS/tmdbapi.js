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
  
  // Defines variables for following functions
  var filteredResults = [];
  var page = 1;
  var pagesTotal = 50;
  var genreSelection = 10751

// Defines clearFilter function
function clearFilter() {
    // Clears filteredResults array. For when running the filter functions multiple times
    filteredResults = [];
    page = 1;
    getPage();
}

  // Defines getPage function and makes it asynchronous
  async function getPage() {
    // Gets a page of movie data sorted by popularity descending
    var response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=2129d479a91cfa69f8540fc782cf615a&page=${page}`);
    // Parses response into objects and arrays
    var movies = await response.json();
    console.log(movies);
    // Parsed data is passed as the argument in the filterResults function
    filterResults(movies);
    // The getPage function runs again on the next page results until page 50
    if (page < pagesTotal) {
      page++;
      getPage();
    }
  }
  
  // Defines filterResults function
  function filterResults(data) {
    // Pushes movies matching the selected genre to the filteredResults array
    for (i = 0; i < 19; i++) {
      if (data.results[i].genre_ids.includes(genreSelection)) {
        filteredResults.push(data.results[i]);
      }
    }
    // Logs filteredResults array to the console
    console.log(filteredResults);
  }
  
  // Runs getMovies on page load
  getMovies();