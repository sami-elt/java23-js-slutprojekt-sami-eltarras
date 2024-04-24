import { getTop10, searchByMovieOrPerson } from "./module/movieAPI.js";
import { displayPersons, displayMovies } from "./module/display.js";
import { displayErrorElement } from "./module/displayError.js";

const popularButton = document.querySelector("#popular");
const topRatedButton = document.querySelector("#topRated");
const form = document.querySelector("form");

//toggle description for movies with false or true
popularButton.addEventListener("click", () => {
  getTop10("popular").then(displayMovies(false)).catch(displayErrorElement);
});

topRatedButton.addEventListener("click", () => {
  getTop10("top_rated").then(displayMovies(false)).catch(displayErrorElement);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("input").value;

  const select = document.querySelector("select").value;

  if (select === "movie") {
    searchByMovieOrPerson(input)
      .then(displayMovies(true))
      .catch(displayErrorElement);
  } else if (select === "person") {
    searchByMovieOrPerson(input)
      .then(displayPersons)
      .catch(displayErrorElement);
  }
});
