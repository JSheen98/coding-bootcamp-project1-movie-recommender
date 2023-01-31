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
