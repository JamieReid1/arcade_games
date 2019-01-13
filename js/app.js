
document.addEventListener('DOMContentLoaded', () => {

  const newGameform = document.querySelector('#new-game-form');
  newGameform.addEventListener('submit', handleNewGameFormSubmit);

  const deleteAllButton = document.querySelector('#button-delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});

  const handleNewGameFormSubmit = function(event) {
    event.preventDefault();

    // console.dir(event);

    const gamesList = document.querySelector('#games-list');
    const newGameItem = createNewGameItem(event.target)
    gamesList.appendChild(newGameItem);
  };

  const createNewGameItem = function(form) {

    const newGameItem = document.createElement('div');
    newGameItem.setAttribute('id', 'item-div');

    const newGame = document.createElement('div');
    newGame.setAttribute('id', 'key-value-div');

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

    const dateKey = document.createElement('h4');
    dateKey.textContent = 'Release Date:';
    newGameItemKey.appendChild(dateKey);
    const dateValue = document.createElement('li');
    dateValue.textContent = showDate;
    newGameItemValue.appendChild(dateValue);

    newGame.appendChild(newGameItemKey);
    newGame.appendChild(newGameItemValue);

    const screenshot = document.createElement('img');
    if (titleValue.textContent.toLowerCase().includes('golden', 'eye', '007')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/3/36/GoldenEye007box.jpg');
      } else if (titleValue.textContent.toLowerCase().includes('super', 'mario', '64')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg');
      } else if (titleValue.textContent.toLowerCase().includes('mario', 'kart', '64')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/7/7e/Mario_Kart_64box.png');
      } else if (titleValue.textContent.toLowerCase().includes('donkey', 'kong', '64')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/a/ae/DonkeyKong64CoverArt.jpg');
      } else if (titleValue.textContent.toLowerCase().includes('no', 'mercy')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/9/90/NoMercyGameBox.jpg');
      } else if (titleValue.textContent.toLowerCase().includes('jonah', 'lomu', 'rugby')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/6/63/Johna_lomu_rugby_cover.jpg');
      } else if (titleValue.textContent.toLowerCase().includes('tony', 'hawks', 'pro', 'skater', '2')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/4/41/Tony_Hawk%27s_Pro_Skater_2_cover.png');
      } else if (titleValue.textContent.toLowerCase().includes('grand', 'theft', 'auto', '2')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/2/2e/GTA2_Box_art.jpg');
      } else if (titleValue.textContent.toLowerCase().includes('street', 'fighter', '2', 'turbo')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/2/29/Super_Street_Fighter_II_Turbo_%28flyer%29.png');
      } else if (titleValue.textContent.toLowerCase().includes('smackdown', '2')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/0/0a/WWFSmackDown2KnowYourRole.jpg');
      } else if (titleValue.textContent.toLowerCase().includes('need', 'for', 'speed', 'underground')) {
        screenshot.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/a/a0/Nfsu-win-cover.jpg');
      };

    newGameItem.appendChild(screenshot);

    newGameItem.appendChild(newGame);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'button-delete');
    deleteButton.textContent = 'delete';
    newGameItem.appendChild(deleteButton);

    event.target.reset();

    return newGameItem;

  };

  const handleDeleteAllClick = function (event) {
    const gamesList = document.querySelector('#games-list');
    console.dir(event);
    gamesList.innerHTML = '';
  };

  document.addEventListener('newGameItem', () => {

    const deleteItemButton = document.querySelector('#button-delete');
    deleteItemButton.addEventListener('click', handleDeleteItemClick);

  });

  const handleDeleteItemClick = function(event) {
    const gamesList = document.querySelector('#games-list');
    console.dir(event);

    // const games = gamesList.childNodes;
    // const gamesArr = Array.from(games);
    //
    // gamesList = gamesArr;
    //
    // console.dir(gamesArr);

    // gamesList.removeChild(gamesList.childNodes[index]);

  };
