
document.addEventListener('DOMContentLoaded', () => {

  const newGameform = document.querySelector('#new-game-form');
  newGameform.addEventListener('submit', handleNewGameFormSubmit);

});

  const handleNewGameFormSubmit = function(event) {
    event.preventDefault();

    console.dir(event);

    const gamesList = document.querySelector('#games-list');
    const newGameItem = createNewGameItem(event.target)
    gamesList.appendChild(newGameItem);


  };

  const createNewGameItem = function(form) {

    const newGameItem = document.createElement('ul');

    const title = document.createElement('li');
    title.textContent = form.title.value;
    newGameItem.appendChild(title);

    return newGameItem;

  };
