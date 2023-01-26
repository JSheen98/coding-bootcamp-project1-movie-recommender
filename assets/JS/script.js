// Map modal query selectors
const mapButton = document.querySelector('#map-button')
const mapModalBg = document.querySelector('#map-modal-bg')
const mapModal = document.querySelector('#map-modal')

// Adds a click event to the Map button which opens a modal
mapButton.addEventListener('click', function () {
    mapModal.classList.add('is-active')
} )

// Adds a click event to the background; when clicked, it closes the modal
mapModalBg.addEventListener('click', function() {
    mapModal.classList.remove('is-active')
})


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
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
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById('myInput').value
    console.log(document.getElementById('myInput').value);
  }
});

var search = document.getElementById("myBtn");
search.addEventListener('click', (event) => {
  document.getElementById('myInput').value
  console.log(document.getElementById('myInput').value)

});
