  const searchInput = document.getElementById("search-input");
  const resultsDiv = document.getElementById("results");

  const getRecipeItemHtml = (recipe) => {
    return `
    <a href='${recipe.url}' target="_blank" class='group'>
      <div
        class='w-full overflow-hidden rounded-md bg-green-600 '>
       <h2 class='mt-1 mr-2 ml-2 text-center text-lg text-clip text-gray-900'>${recipe.label}</h2>
        <img
          src='${recipe.image}'
          alt='${recipe.label}'
          class='h-64 w-full object-cover object-center group-hover:opacity-75'/>
        <p class='ml-2 mt-1 text-sm text-gray-900'>Source ${recipe.source} minutes</p>
      </div>
    </a>
    `;
  }

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
          let itemsHtml = '';
          data.hits.forEach(result => {
            const itemHtml = getRecipeItemHtml(result.recipe);
            itemsHtml += itemHtml;
            // const p = document.createElement("p");
            // p.innerText = result.recipe.label;
            // resultsDiv.appendChild(p);
          });

          resultsDiv.innerHTML = itemsHtml;
        })
        .catch(error => console.error(error));
        
      }
  });


/*

<a href='{{recipe.sourceUrl}}' target="_blank" class='group'>
            <div
              class='w-full overflow-hidden rounded-md bg-green-600 '>
             <h2 class='mt-1 mr-2 ml-2 text-center text-lg text-clip text-gray-900'>{{recipe.title}}</h2>
              <img
                src='{{recipe.image}}'
                alt='Picture of food.'
                class='h-64 w-full object-cover object-center group-hover:opacity-75'/>
                  <p class='ml-2 mt-1 text-sm text-gray-900'>Ready in {{recipe.readyInMinutes}} minutes</p>
                  <p class='ml-2 mt-1 text-sm text-gray-900'>Health Score: {{recipe.healthScore}}</p>
            </div>
          
          
          </a>

*/

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