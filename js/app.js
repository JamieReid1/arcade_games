
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

    const genresArr = boxArr.map(box => box.value);

    let showGenres = "";
    genresArr.forEach(genre => showGenres += genre + "\xa0\xa0\xa0");

    const genre = document.createElement('li');
    genre.textContent = `Genre: ${showGenres}`;
    newGameItem.appendChild(genre);

    const radios = Array.from(document.querySelectorAll('#modes'));
    const radioArr = radios.filter(radio => radio.checked === true);

    const modesArr = radioArr.map(radio => radio.value);

    let showModes = "";
    modesArr.forEach(mode => showModes += mode + " \xa0\xa0\xa0");

    const modes = document.createElement('li');
    modes.textContent = `Modes: ${showModes}`;
    newGameItem.appendChild(modes);

    const showDate = form.date.value.split("-").reverse().join("/");
    console.log(showDate);

    const releaseDate = document.createElement('li');
    releaseDate.textContent = `Release Date: ${showDate}`;
    newGameItem.appendChild(releaseDate);

    event.target.reset();

    return newGameItem;
  };
