const newShoppingList = async function (event) {
  event.preventDefault();

  const listTitle = document.getElementById('listTitle').value;
  const occasion = document.getElementById('occasion').value;
  const store = document.getElementById('store').value;
  const description = document.getElementById('description').value;
  const spending = document.getElementById('spending').value;

  if (listTitle && occasion && store && description && spending) {
    const response = await fetch(`/api/savedLists`, {
      method: 'POST',
      body: JSON.stringify({ listTitle, occasion, store, description, spending }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/savedLists');
    } else {
      alert('Failed to create Shopping List');
    }
  }
};

document
  .getElementById('submission')
  .addEventListener('click', newShoppingList);
