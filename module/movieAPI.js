const API_KEY = "c7be124161bda5623d432162671b7c2d";

export async function getTop10(value) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${value}?language=en-US&page=1&api_key=${API_KEY}`;

    const respons = await fetch(url);
    const data = await respons.json();

    return data.results.slice(0, 10);
  } catch (error) {
    throw new Error("something went wrong");
  }
}

export async function searchByMovieOrPerson(value) {
  const select = document.querySelector("select").value;

  try {
    const url = `https://api.themoviedb.org/3/search/${select}?query=${value}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;
    const respons = await fetch(url);

    const data = await respons.json();

    //Error handling - check if the search is empty or if the respons is not ok with custom message.
    if (data.results == 0) {
      throw new Error("try again");
    }
    if (!respons.ok) {
      throw new Error();
    }

    return data.results;
  } catch (error){
    if (error.message.includes("try again")) {
      throw new Error("can't find what you're looking for. try again");
    } else throw new Error("something went wrong!");
  }
}
