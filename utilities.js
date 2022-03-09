function setAnchorPointCenter(obj) {
  var bounds = obj.getBounds();
  obj.regX = bounds.width / 2;
  obj.regY = bounds.height / 2;
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getRandomValue(obj) {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
}

function removeElement(array, value) {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
}
