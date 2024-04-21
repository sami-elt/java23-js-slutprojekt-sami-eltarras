const API_KEY = "c7be124161bda5623d432162671b7c2d";

export async function getTop10(value) {
  try {

 
  const url = `https://api.themoviedb.org/3/movie/${value}?language=en-US&page=1&api_key=${API_KEY}`;

  const respons = await fetch(url);
  const data = await respons.json();

  return data.results.slice(0, 10);
} catch (error){
  throw new Error("something went wrong");
}
}

export async function searchByMovieOrPerson(value) {

try{
  const select = document.querySelector("select").value;

  const url = `https://api.themoviedb.org/3/search/${select}?query=${value}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;

  const respons = await fetch(url);
  const data = await respons.json();

  return data.results;

} catch (error){

  throw new Error("Error");
}


}


