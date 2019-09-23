// console.log("somethingHere: " + theCheese);
//var jsonData = JSON.parse(document.getElementById("tileInfo").textContent);
var whichElement = document.getElementById("auto-flip-1");
var changeWitch = whichElement.getElementsByClassName("flip-card-front")[0];
var randomTile = getRandomStuff(jsonData, whichElement);
updateTile(changeWitch, randomTile[0], randomTile[1], randomTile[2]);

flippyMe(whichElement);
whichElement.addEventListener(
  "transitionend",
  function(event) {
    flippyMe(whichElement);
  },
  false
);

function flippyMe(whichElement) {
  var waitForIt, changeWitch, randomTile;
  waitForIt = setTimeout(function() {
    randomTile = getRandomStuff(jsonData, whichElement);
    if (whichElement.classList.contains("flip-card-automatic-flipped")) {
      changeWitch = whichElement.getElementsByClassName("flip-card-front")[0];
      updateTile(changeWitch, randomTile[0], randomTile[1], randomTile[2]);
      whichElement.classList.remove("flip-card-automatic-flipped");
    } else {
      changeWitch = whichElement.getElementsByClassName("flip-card-back")[0];
      updateTile(changeWitch, randomTile[0], randomTile[1], randomTile[2]);
      whichElement.classList.add("flip-card-automatic-flipped");
    }
  }, 2000);
}

function updateTile(changeWitch, newTitle, newCopy, newImg) {
  changeWitch.getElementsByTagName("h2")[0].innerHTML = newTitle;
  changeWitch.getElementsByTagName("p")[0].innerHTML = newCopy;
  changeWitch.style.backgroundImage = "url('" + newImg + "')";
}

function getRandomStuff(jsonData, whichElement) {
  var randomNum;
  while (true) {
    randomNum = Math.floor(Math.random() * jsonData.tiles.length);
    var prevNum = whichElement.getAttribute("data");
    if (randomNum != prevNum) {
      break;
    }
  }
  whichElement.setAttribute("data", randomNum);
  var newTitle = jsonData.tiles[randomNum].tileTile;
  var newImg = jsonData.tiles[randomNum].tileImg;
  var newCopy = jsonData.tiles[randomNum].tileCopy;
  return [newTitle, newCopy, newImg];
}
