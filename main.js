import { getTop10, searchByMovieOrPerson } from "./module/movieAPI.js";
import { displayMovie, displayPerson, displayTop10 } from "./module/display.js";
import { displayError } from "./module/error.js";

const popularButton = document.querySelector("#popular");
const topRatedButton = document.querySelector("#topRated");
const form = document.querySelector("form");

popularButton.addEventListener("click", () => {
  getTop10("popular").then(displayTop10);
});

topRatedButton.addEventListener("click", () => {
  getTop10("top_rated").then(displayTop10);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("input").value;

  const select = document.querySelector("select").value;

  if (select === "movie") {
    searchByMovieOrPerson(input).then(displayMovie).catch();
  } else if (select === "person") {
    searchByMovieOrPerson(input).then(displayPerson).catch();
  }
});
