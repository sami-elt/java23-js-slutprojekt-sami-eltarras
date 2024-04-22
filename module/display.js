export function displayPersons(persons) {
  const divEl = document.querySelector("#container");

  divEl.innerHTML = "";

  for (const person of persons) {
    const nameEl = document.createElement("h1");
    const infoEl = document.createElement("p");
    const imgEl = document.createElement("img");

    divEl.append(nameEl, imgEl, infoEl);

    nameEl.textContent = person.name;
    infoEl.textContent = person.known_for_department;
    imgEl.src = `https://image.tmdb.org/t/p/w200/` + person.profile_path;

    if (person.profile_path === null) {
      imgEl.src = "./img/defaultImg.jpg";
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

export function displayTop10(x) {
  return function (movies) {
    const divEl = document.querySelector("#container");
    divEl.innerHTML = "";

    for (const { title, release_date, poster_path, overview } of movies) {
      const infoEl = document.createElement("p");
      const imgEl = document.createElement("img");
      const nameEl = document.createElement("h1");
      const infoElDesc = document.createElement("p");

      divEl.append(nameEl, imgEl, infoEl, infoElDesc, infoElDesc);

      if (x) infoElDesc.textContent = overview;

      nameEl.textContent = title;

      imgEl.src = `https://image.tmdb.org/t/p/w200/` + poster_path;
      infoEl.textContent = `Release date: ${release_date}`;
    }
  };
}
