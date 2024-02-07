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

GameBoard.prototype.placeShip = function (Xcoordinates, Ycoordinates, incrementNumber, shipType) {
  if (this.rotate == false) {
    this.placeHorizontal(Xcoordinates, Ycoordinates, shipType);
  }
  else {
    this.placeHorizontal(Xcoordinates, Ycoordinates, shipType);
  }
};

module.exports = GameBoard