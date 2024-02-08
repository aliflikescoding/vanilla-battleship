const Ship_2 = require("./_ship_2")
const Ship_3 = require("./_ship_3")
const Ship_4 = require("./_ship_4")

function GameBoard() {
  this.grid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
  this.rotate = false;
  this.shipArray = [];
}

// getters
GameBoard.prototype.getRotate = function () {
  return this.rotate;
};

GameBoard.prototype.getGrid = function () {
  return this.grid;
};

GameBoard.prototype.getShipArray = function () {
  return this.shipArray;
}

// setters
GameBoard.prototype.setGrid = function (grid) {
  return this.grid = grid;
};

GameBoard.prototype.rotateShipPosition = function () {
  if (this.rotate === false) {
    this.rotate = true;
  }
  else {
    this.rotate = false;
  }
};

GameBoard.prototype.placeHorizontal = function (Xcoordinates, Ycoordinates, shipType) {
  let array = this.getGrid();
  for (let i = 0; i <= shipType-1; i++) {
    array[Ycoordinates][Xcoordinates+i] = 1;
  }
  this.setGrid(array);
};

GameBoard.prototype.placeVertical = function (Xcoordinates, Ycoordinates, shipType) {
  let array = this.getGrid();
  for (let i = 0; i <= shipType-1; i++) {
    array[Ycoordinates+i][Xcoordinates] = 1;
  }
  this.setGrid(array);
};

GameBoard.prototype.getHorizontalCoordinants = function (Xcoordinates, Ycoordinates, shipType) {
  let array = [];
  for (let i = 0; i <= shipType-1; i++) {
    let array_two = [];
    array_two.push(Xcoordinates+i);
    array_two.push(Ycoordinates);
    array.push(array_two);
  }
  return array;
}

GameBoard.prototype.getVerticalCoordinants = function (Xcoordinates, Ycoordinates, shipType) {
  let array = [];
  for (let i = 0; i <= shipType-1; i++) {
    let array_two = [];
    array_two.push(Xcoordinates);
    array_two.push(Ycoordinates+i);
    array.push(array_two);
  }
  return array;
}

GameBoard.prototype.returnShipObject = function (shipType) {
  let ship;
  if (shipType === 2) {
    ship = new Ship_2();
  } else if (shipType === 3) {
    ship = new Ship_3();
  } else if (shipType === 4) {
    ship = new Ship_4();
  }
  return ship;
}  

GameBoard.prototype.placeShip = function (Xcoordinates, Ycoordinates, shipType) {
  let array = this.shipArray;
  if (this.rotate == false) {
    this.placeHorizontal(Xcoordinates, Ycoordinates, shipType);
    array.push([this.returnShipObject(shipType), this.getHorizontalCoordinants(Xcoordinates, Ycoordinates, shipType)]);
  }
  else {
    this.placeVertical(Xcoordinates, Ycoordinates, shipType);
    array.push([this.returnShipObject(shipType), this.getVerticalCoordinants(Xcoordinates, Ycoordinates, shipType)]);
  }
  this.shipArray = array;
};

GameBoard.prototype.undoPlacement = function () {
  let grid = this.grid;
  let shipArray = this.shipArray;

  let lastElement = shipArray[shipArray.length-1];
  let lastElementCoordinants = lastElement[1];
  lastElementCoordinants.forEach((cords) => {
    let x = cords[0];
    let y = cords[1];
    grid[y][x] = 0;
  });
  shipArray.pop();
  this.shipArray = shipArray;
  this.grid = grid;
}

module.exports = GameBoard