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

var input = document.getElementById("myInput");
var results = []

var submitForm = document.getElementById("submit-form")
submitForm.addEventListener('submit', function (event) {
  event.preventDefault()
  document.getElementById('myInput').value
  results.push(input.value)
  localStorage.setItem("myResults", JSON.stringify(results))
  console.log(document.getElementById('myInput').value);
  document.getElementById('myInput').value = ""
})

//https://api.themoviedb.org/3/discover/movie?api_key=2129d479a91cfa69f8540fc782cf615a&with_genres=28

var option = document.querySelectorAll(".option")
console.log(option)
for (var i = 0; i < option.length; i++) {

  option[i].addEventListener("click", function () {
    console.log(this.getAttribute("id"))
    getmoviesbygenre(this.getAttribute("id"))
  })
}
function getmoviesbygenre(genre_id) {
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=2129d479a91cfa69f8540fc782cf615a&with_genres=" + genre_id)
    .then(function (response) {
      return response.json();
    })
    // Logs array of movies to the console
    .then(function (data) {
      // console.log(data.results);
      for (var i = 0; i < 5; i++) {
        console.log(data.results[i])

      }
    });
}

