// Map modal query selectors
const mapButton = document.querySelector('#map-button')
const mapModalBg = document.querySelector('#map-modal-bg')
const mapModal = document.querySelector('#map-modal')

// Adds a click event to the Map button which opens a modal
mapButton.addEventListener('click', function () {
  mapModal.classList.add('is-active')
})

// Adds a click event to the background; when clicked, it closes the modal
mapModalBg.addEventListener('click', function () {
  mapModal.classList.remove('is-active')
})


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


// searchbar logic
var apiKey = '2129d479a91cfa69f8540fc782cf615a';
var input = document.getElementById("myInput");
var results = JSON.parse(localStorage.getItem("myResults")) || [];
var card1Row2 = document.getElementById('card-1')
var card2Row2 = document.getElementById('card-2')
var card3Row2 = document.getElementById('card-3')
var card4Row2 = document.getElementById('card-4')
var card5Row2 = document.getElementById('card-5')
var searchTitle = document.getElementById('search-title')

var submitForm = document.getElementById("submit-form")
submitForm.addEventListener('submit', function (event) {
  if (input.value === '') {
    return
  } else {
    event.preventDefault()
    // local storage
    results.push(input.value)
    localStorage.setItem("myResults", JSON.stringify(results))
    // API search


    function fetchNow() {
      fetch("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=en-US&query=" + input.value + "&page=1&include_adult=false")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.results.length == 0) {
            input.value = ''
            return
          } else {
            var results1 = 0;

            var posterLink = "https://image.tmdb.org/t/p/original/"
            if (data.results[results1].poster_path == null) {
              while (data.results[results1].poster_path == null) {
                results1++
              }
            }
            var poster1 = posterLink + data.results[results1].poster_path

            var results2 = results1 + 1;
            if (data.results[results2].poster_path == null) {
              while (data.results[results2].poster_path == null) {
                results2++
              }
            }
            var poster2 = posterLink + data.results[results2].poster_path

            var results3 = results2 + 1;
            if (data.results[results3].poster_path == null) {
              while (data.results[results3].poster_path == null) {
                results3++
              }
            }
            var poster3 = posterLink + data.results[results3].poster_path

            var results4 = results3 + 1;
            if (data.results[results4].poster_path == null) {
              while (data.results[results4].poster_path == null) {
                results4++
              }
            }
            var poster4 = posterLink + data.results[results4].poster_path

            var results5 = results4 + 1;
            if (data.results[results5].poster_path == null) {
              while (data.results[results5].poster_path == null) {
                results5++
              }
            }
            var poster5 = posterLink + data.results[results5].poster_path

            var card1Row2Content = ""
            var card2Row2Content = ""
            var card3Row2Content = ""
            var card4Row2Content = ""
            var card5Row2Content = ""
            var containerTitle = ""



            containerTitle = `<h3 id="rowSearchTitle" class="rowTitle">Search Results...</h3>`
            card1Row2Content += `<div id="card-1" class="img-fit card" style="background-image:url('${poster1}')"></div>`
            card2Row2Content += `<div id="card-1" class="img-fit card" style="background-image:url('${poster2}')"></div>`
            card3Row2Content += `<div id="card-1" class="img-fit card" style="background-image:url('${poster3}')"></div>`
            card4Row2Content += `<div id="card-1" class="img-fit card" style="background-image:url('${poster4}')"></div>`
            card5Row2Content += `<div id="card-1" class="img-fit card" style="background-image:url('${poster5}')"></div>`


            searchTitle.innerHTML = containerTitle
            card1Row2.innerHTML = card1Row2Content
            card2Row2.innerHTML = card2Row2Content
            card3Row2.innerHTML = card3Row2Content
            card4Row2.innerHTML = card4Row2Content
            card5Row2.innerHTML = card5Row2Content


            input.value = ""
          }
        })
    }
    fetchNow()
  }
})


var input = document.getElementById("myInput");
var recentSearches = document.getElementById("recent-searches");

submitForm.addEventListener("submit", function (event) {
  event.preventDefault()
  if (results == '') {

    return
  } else {
    // retrieve the results from local storage
    var results = JSON.parse(localStorage.getItem("myResults")) || [];

    //only allow 5 results
    results = results.slice(0, 5);

    // create a list of recent searches
    var list = '';

    for (var i = 0; i < results.length; i++) {
      list += `<li class="results">${results[i]}</li>`;
    }
  }
  // update the HTML list with the recent searches
  recentSearches.innerHTML = list;

});

function loadLocalStorage() {
  results = results.slice(0, 5)
  var list = ''
  for (var i = 0; i < results.length; i++) {
    list += `<li class="results">${results[i]}</li>`;
  }
  recentSearches.innerHTML = list;

}

loadLocalStorage()



var sidebar = document.querySelector("#side-navigation-bar")
// Media to remove search bar class
function removeSidebar(pixelsUnder) {
  if (pixelsUnder.matches) {
    sidebar.classList.remove("sidenav")
  } else {
    sidebar.classList.add("sidenav")
  }
}
var pixelsUnder = window.matchMedia("(max-width: 751px)")
removeSidebar(pixelsUnder)
pixelsUnder.addListener(removeSidebar)

