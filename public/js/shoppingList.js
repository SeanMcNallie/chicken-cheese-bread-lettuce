const newShoppingList = async function (event) {
  event.preventDefault();

  const title = document.getElementById('listTitle').value;
  const occasion = document.getElementById('occasion').value;
  const store = document.getElementById('store').value;
  const ingrediants = document.getElementById('description').value;
  const spending = document.getElementById('spending').value;

  if (title && occasion && store && ingrediants && spending) {
    const response = await fetch(`/api/lists`, {
      method: 'POST',
      body: JSON.stringify({ title, occasion, store, ingrediants, spending }),
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
