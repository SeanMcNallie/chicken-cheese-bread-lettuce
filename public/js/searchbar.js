// const searchInput = document.querySelector('.input')

// searchInput.addEventListener("input", (e) => {
//     // inside, we will need to achieve a few things:
//     // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
//     let value = e.target.value

//     // 2. check: if input exists and if input is larger than 0
//     if (value && value.trim().length > 0){
//         // 3. redefine 'value' to exclude white space and change input to all lowercase
//          value = value.trim().toLowerCase()
//         // 4. return the results only if the value of the search is included in the person's name
//         // we need to write code (a function for filtering through our data to include the search input value)
//     } else {
//         // 5. return nothing
//         // input is invalid -- show an error message or show no results

//     }

// }
const searchInput = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");
// Add event listener for enter key press
searchInput.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    const searchTerm = searchInput.value;
    const apiKey = "a93650b63c7c6bf742878f52d5349438";
    const apiId = "d23bf0e9";
    // Encode the API key and secret as base64
    const encodedCredentials = btoa(`${apiKey}:${apiId}`);
    // Fetch the data
    fetch(`https://api.edamam.com/api/recipes/v2/search?q=${searchTerm}`, {
      headers: {
        "Authorization": `Basic ${encodedCredentials}`
      }
    })
      .then(response => response.json())
      .then(data => {
        resultsDiv.innerHTML = "";
        data.forEach(result => {
          const p = document.createElement("p");
          p.innerText = result.name;
          resultsDiv.appendChild(p);
        });
      })
      .catch(error => console.error(error));
  }
});