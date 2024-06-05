let rows = 3;
let columns = 3;

let currTile;
let otherTile; //blank tile

let turns = 0;

let gameWindow;

let shuffleButton;

window.onload = renderBoard;

function renderBoard() {
  let imgOrder = ["1", "5", "3", "4", "2", "6", "7", "8", "9"];
  shuffleButton = document.getElementById("shuffle");
  gameWindow = document.getElementById("board");
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      //<img id="0-0" src="1.jpg">
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = shuffle(imgOrder).shift() + ".jpg";
      console.log(tile.src);
      //DRAG FUNCTIONALITY
      tile.addEventListener("touchstart", dragStart); //click an image to drag
      tile.addEventListener("dragover", dragOver); //moving image around while clicked
      tile.addEventListener("dragenter", dragEnter); //dragging image onto another one
      tile.addEventListener("dragleave", dragLeave); //dragged image leaving anohter image
      tile.addEventListener("touchend", dragDrop); //drag an image over another image, drop the image
      shuffleButton.addEventListener("click", shuffleTiles);
      //after drag drop, swap the two tiles
      gameWindow.append(tile);
    }
  }
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function shuffleTiles() {
  gameWindow.innerHTML = "";
  renderBoard();
}

function isComplete() {
  const tiles = gameWindow.children;
  let currentPoint = 1;
  for (let i = 0; i < tiles.length; i++) {
    const element = tiles[i];
    const tileNumber = element.attributes.src.nodeValue;
    if (!tileNumber.includes(currentPoint + ".jpg")) {
      return false;
    }
    currentPoint++;
  }
  return true;
}

function getElementFromPoint(x, y) {
  return document.elementFromPoint(x, y);
}

function dragStart() {
  currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop(e) {
  const xCodrdinates = e.changedTouches[0].clientX;
  const yCordinates = e.changedTouches[0].clientY;
  otherTile = getElementFromPoint(xCodrdinates, yCordinates); //this refers to the img tile being dropped on
  dragEnd();
}

function dragEnd() {
  if (!otherTile.src.includes("5.jpg")) {
    return;
  }

  let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
  let r = parseInt(currCoords[0]);
  let c = parseInt(currCoords[1]);

  let otherCoords = otherTile.id.split("-");
  let r2 = parseInt(otherCoords[0]);
  let c2 = parseInt(otherCoords[1]);

  let moveLeft = r == r2 && c2 == c - 1;
  let moveRight = r == r2 && c2 == c + 1;

  let moveUp = c == c2 && r2 == r - 1;
  let moveDown = c == c2 && r2 == r + 1;

  let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

  if (isAdjacent) {
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
  }
  isComplete();
}
