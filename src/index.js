function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElemnt = document.querySelector("#search-form");
searchFormElemnt.addEventListener("submit", handleSearchSubmit);
