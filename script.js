const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let moviePrice = parseInt(movieSelect.value);
// function for update counter
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  const selectedSeatsPrice = selectedSeatsCount * moviePrice;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsPrice;

  count.innerHTML = selectedSeatsCount;
  total.innerHTML = selectedSeatsCount * moviePrice;
}
// function for select different movie
movieSelect.addEventListener("change", (e) => {
  moviePrice = parseInt(e.target.value);
  updateSelectedCount();
});
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
