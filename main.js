import { getTop10, searchByMovieOrPerson } from "./module/movieAPI.js";
import { displayMovie, displayPersons, displayTop10} from "./module/display.js";
import { displayErrorElement } from "./module/error.js";

const popularButton = document.querySelector("#popular");
const topRatedButton = document.querySelector("#topRated");
const form = document.querySelector("form");

popularButton.addEventListener("click", () => {
  getTop10("popular").then(displayTop10).catch(displayErrorElement);
});

topRatedButton.addEventListener("click", () => {
  getTop10("top_rated").then(displayTop10).catch(displayErrorElement);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("input").value;

  const select = document.querySelector("select").value;

  if (select === "movie") {
    searchByMovieOrPerson(input).then(displayMovie).catch(displayErrorElement);
  } else if (select === "person") {
    searchByMovieOrPerson(input).then(displayPersons).catch(displayErrorElement);
  }
});
