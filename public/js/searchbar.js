  const searchInput = document.getElementById("search-input");
  const resultsDiv = document.getElementById("results");
  // Add event listener for enter key press
  searchInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("I searched it!")
      const searchTerm = searchInput.value;
      console.log(searchTerm)
      const apiKey = "a93650b63c7c6bf742878f52d5349438";
      const apiId = "d23bf0e9";
      // Encode the API key and secret as base64
      const encodedCredentials = btoa(`${apiKey}:${apiId}`);

      // var food = "chicken"

    
      // Fetch the data
      fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${apiId}&app_key=${apiKey}`, {
        headers: {
          "Authorization": `Basic ${encodedCredentials}`
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          resultsDiv.innerHTML = "";
          data.hits.forEach(result => {
            const p = document.createElement("p");
            p.innerText = result.recipe.label;
            resultsDiv.appendChild(p);
          });
        })
        .catch(error => console.error(error));
        
      }
  });
  // const apiKey = "a93650b63c7c6bf742878f52d5349438";
  // const apiId = "d23bf0e9";
  // // Encode the API key and secret as base64
  // const encodedCredentials = btoa(`${apiKey}:${apiId}`);
  // var food = "chicken"

    
      // Fetch the data
      // fetch(`https://api.edamam.com/search?q=${food}&app_id=${apiId}&app_key=${apiKey}`, {
      //   headers: {
      //     "Authorization": `Basic ${encodedCredentials}`
      //   }
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log(data)
      //   //   resultsDiv.innerHTML = "";
      //   //   data.forEach(result => {
      //   //     const p = document.createElement("p");
      //   //     p.innerText = result.name;
      //   //     resultsDiv.appendChild(p);
      //   //   });
      //   // })
      //   // .catch(error => console.error(error));
      //   })