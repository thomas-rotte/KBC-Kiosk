
let rows = 3;
let columns = 3;

let currTile;
let otherTile; //blank tile

let turns = 0;

let imgOrder = ["1", "5", "3", "4", "2", "6", "7", "8", "9"];
// var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

let gameWindow;

window.onload = function() {
    gameWindow = document.getElementById('board')
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("touchstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("touchend", dragDrop);        //drag an image over another image, drop the image
                 //after drag drop, swap the two tiles
            gameWindow.append(tile);

        }
    }
}

function getElementFromPoint(x,y){
    return document.elementFromPoint(x,y)
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

function dragLeave() {

}

function dragDrop(e) {
    const xCodrdinates = e.changedTouches[0].clientX;
    const yCordinates = e.changedTouches[0].clientY;
    otherTile = getElementFromPoint(xCodrdinates,yCordinates); //this refers to the img tile being dropped on
    console.log(otherTile);
    dragEnd()
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

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }


}