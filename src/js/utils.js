function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function addImage(source, description) {
  const image = document.createElement('img');
  image.src = source;
  image.alt = description;
  return image;
}

function checkRandomIndex(arr) {
  const prevIndex = arr.findIndex((el) => el.querySelector('img'));
  let randomIndex = getRandomInt(16);
  while (prevIndex === randomIndex) {
    randomIndex = getRandomInt(16);
  }
  return randomIndex;
}

export { addImage, checkRandomIndex };
