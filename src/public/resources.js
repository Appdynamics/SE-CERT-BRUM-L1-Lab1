function writeImage(parentId, file, width, height) {
  // console.log("Writing " + file + " into " + parentId);

  var cacheBuster = Math.floor(Math.random() * 10000 + 1);
  var src = file + "?cache=" + cacheBuster;
  var elem = document.getElementById(parentId);
  var img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("width", width);
  img.setAttribute("height", height);
  elem.appendChild(img);
}

function getRating() {
  return randomInt(5);
}

function randomInt(max) {
  var int = Math.floor(Math.random() * max + 1);
  return int;
}

function getPrice() {
  return randomDouble(10, 50);
}

function randomDouble(min, max) {
  var double =
    Math.random() < 0.5
      ? (1 - Math.random()) * (max - min) + min
      : Math.random() * (max - min) + min;

  return double.toFixed(2);
}
