export function displayErrorElement(error){
   
    const divEl = document.querySelector("#container");
    divEl.innerHTML = "";
    const errorMessage = document.createElement("h1");
    
    divEl.append(errorMessage);
  
    errorMessage.textContent = error;
  }