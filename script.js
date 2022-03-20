const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let moviePrice = parseInt(movieSelect.value);
// populate UI
populateUI();
// set movie data to localStorage
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}
// function for update counter
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  localStorage.setItem("selectedIndexSeats", JSON.stringify(selectedIndex));

  const selectedSeatsCount = selectedSeats.length;
  const selectedSeatsPrice = selectedSeatsCount * moviePrice;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsPrice;

  count.innerHTML = selectedSeatsCount;
  total.innerHTML = selectedSeatsCount * moviePrice;
}
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedIndexSeats"));
  if(selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat,index)=>{
      if(selectedSeats.indexOf(index)>-1){
        seat.classList.add("selected");
      }
    })
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if(selectedMovieIndex !== null){
    movieSelect.selectedIndex = selectedMovieIndex;
  }
 
}

// function for select different movie
movieSelect.addEventListener("change", (e) => {
  moviePrice = parseInt(e.target.value);
  setMovieData(e.target.selectedIndex,e.target.value);
  updateSelectedCount();
});
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

updateSelectedCount();
