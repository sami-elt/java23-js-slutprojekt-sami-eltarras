export function displayError() {
  const divEl = document.querySelector("#container");


  if (data.total_results === 0) {
    const errorMessage = document.createElement("p");

    divEl.append(errorMessage);

    errorMessage.textContent = "Cant find";
  }


}
