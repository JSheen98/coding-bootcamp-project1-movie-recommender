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
var results = []
var card1Row2 = document.getElementById('card-1')
var card2Row2 = document.getElementById('card-2')
var card3Row2 = document.getElementById('card-3')
var card4Row2 = document.getElementById('card-4')
var card5Row2 = document.getElementById('card-5')
var searchTitle = document.getElementById('search-title')

var submitForm = document.getElementById("submit-form")
submitForm.addEventListener('submit', function (event) {
  event.preventDefault()
  // local storage
  results.push(input.value)
  localStorage.setItem("myResults", JSON.stringify(results))
  // API search
  console.log(input.value);

  function fetchNow() {
    fetch("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=en-US&query=" + input.value + "&page=1&include_adult=false")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var posterLink = "https://image.tmdb.org/t/p/original/"
      var poster1 = posterLink + data.results[1].poster_path
      var poster2 = posterLink + data.results[2].poster_path
      var poster3 = posterLink + data.results[3].poster_path
      var poster4 = posterLink + data.results[4].poster_path
      var poster5 = posterLink + data.results[5].poster_path
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
    })
  }
  fetchNow()
})



