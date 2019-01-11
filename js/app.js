
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
    title.textContent = `Title: ${form.title.value}`;
    newGameItem.appendChild(title);

    const platform = document.createElement('li');
    platform.textContent = `Platform: ${form.platform.value}`;
    newGameItem.appendChild(platform);

    const publisher = document.createElement('li');
    publisher.textContent = `Publisher: ${form.publisher.value}`;
    newGameItem.appendChild(publisher);

    const cboxes = Array.from(document.querySelectorAll('#genre'));
    const boxArr = cboxes.filter(box => box.checked === true);

    const values = boxArr.map(box => box.value);

    let show = "";
    values.forEach(value => show += value + " ");

    const genre = document.createElement('li');
    genre.textContent = `Genre: ${show}`;
    newGameItem.appendChild(genre);

    return newGameItem;

  };
