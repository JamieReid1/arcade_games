
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

    const newGameItem = document.createElement('div');
    newGameItem.setAttribute('id', 'item-div');

    const newGameItemKey = document.createElement('div');
    newGameItemKey.setAttribute('id', 'key-div');
    const newGameItemValue = document.createElement('div');
    newGameItemValue.setAttribute('id', 'value-div');

    const titleKey = document.createElement('h4');
    titleKey.textContent = 'Title:';
    newGameItemKey.appendChild(titleKey);
    const titleValue = document.createElement('li');
    titleValue.textContent = form.title.value;
    newGameItemValue.appendChild(titleValue);

    const platformKey = document.createElement('h4');
    platformKey.textContent = 'Platform:';
    newGameItemKey.appendChild(platformKey);
    const platformValue = document.createElement('li');
    platformValue.textContent = form.platform.value;
    newGameItemValue.appendChild(platformValue);

    const publisherKey = document.createElement('h4');
    publisherKey.textContent = 'Publisher:';
    newGameItemKey.appendChild(publisherKey);
    const publisherValue = document.createElement('li');
    publisherValue.textContent = form.publisher.value;
    newGameItemValue.appendChild(publisherValue);

    const cboxes = Array.from(document.querySelectorAll('#genre'));
    const boxArr = cboxes.filter(box => box.checked === true);

    const genresArr = boxArr.map(box => box.value);

    let showGenres = "";
    genresArr.forEach(genre => showGenres += genre + "\xa0\xa0\xa0");

    const genreKey = document.createElement('h4');
    genreKey.textContent = 'Genre:';
    newGameItemKey.appendChild(genreKey);
    const genreValue = document.createElement('li');
    genreValue.textContent = showGenres;
    newGameItemValue.appendChild(genreValue);

    const radios = Array.from(document.querySelectorAll('#modes'));
    const radioArr = radios.filter(radio => radio.checked === true);

    const modesArr = radioArr.map(radio => radio.value);

    let showModes = "";
    modesArr.forEach(mode => showModes += mode + "\xa0\xa0\xa0");

    const modeKey = document.createElement('h4');
    modeKey.textContent = 'Mode:';
    newGameItemKey.appendChild(modeKey);
    const modeValue = document.createElement('li');
    modeValue.textContent = showModes;
    newGameItemValue.appendChild(modeValue);

    const showDate = form.date.value.split("-").reverse().join("/");
    console.log(showDate);

    const dateKey = document.createElement('h4');
    dateKey.textContent = 'Release Date:';
    newGameItemKey.appendChild(dateKey);
    const dateValue = document.createElement('li');
    dateValue.textContent = showDate;
    newGameItemValue.appendChild(dateValue);

    newGameItem.appendChild(newGameItemKey);
    newGameItem.appendChild(newGameItemValue);

    // event.target.reset();

    return newGameItem;
  };
