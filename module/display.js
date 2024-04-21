export function displayTop10(movies) {
  const divEl = document.querySelector("#container");
  divEl.innerHTML = "";

  for (const { title, release_date, poster_path } of movies) {
    const infoEl = document.createElement("p");
    const imgEl = document.createElement("img");

    divEl.append(infoEl, imgEl);

    imgEl.src = `https://image.tmdb.org/t/p/w200/` + poster_path;

    infoEl.textContent = title + release_date;
  }
}

export function displayPerson(persons) {
  const divEl = document.querySelector("#container");

  divEl.innerHTML = "";

  cantFindSearch(persons);

  for (const person of persons) {
    const nameEl = document.createElement("h1");
    const infoEl = document.createElement("p");
    const imgEl = document.createElement("img");

    divEl.append(nameEl, imgEl, infoEl);

    nameEl.textContent = person.name;
    infoEl.textContent = person.known_for_department;
    imgEl.src = `https://image.tmdb.org/t/p/w200/` + person.profile_path;

    if (person.profile_path === null) {
      imgEl.src = "./img/defaultimg.jpg";
    } else if (person.known_for_department === null) {
      infoEl.textContent = "No information";
    }

    for (const { original_title, media_type, name } of person.known_for) {
      const infoEl1 = document.createElement("p");

      divEl.append(infoEl1);

      if (original_title == undefined) {
        infoEl1.textContent = `${media_type}: ${name}`;
      } else infoEl1.textContent = `${media_type}: ${original_title}`;
    }
  }
}

export function displayMovie(movies) {
  const divEl = document.querySelector("#container");

  divEl.innerHTML = "";

  cantFindSearch(movies);

  for (const { overview, poster_path, title, release_date } of movies) {
    const nameEl = document.createElement("h1");
    const infoEl = document.createElement("p");
    const imgEl = document.createElement("img");

    divEl.append(nameEl, imgEl, infoEl);

    imgEl.src = `https://image.tmdb.org/t/p/w200/` + poster_path;
    nameEl.textContent = title;
    infoEl.textContent = `Release Date: ${release_date} Description: ${overview}`;
  }
}

function cantFindSearch(value) {
  const divEl = document.querySelector("#container");
  if (value == 0) {
    const cantFind = document.createElement("h1");
    divEl.append(cantFind);

    cantFind.textContent = "you didnt find anything, try again";
  }
}

