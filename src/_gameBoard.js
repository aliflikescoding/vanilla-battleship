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

GameBoard.prototype.placeShip = function (Xcoordinates, Ycoordinates, incrementNumber, shipType) {
  if (this.rotate == false) {
    this.placeHorizontal(Xcoordinates, Ycoordinates, shipType);
  }
  else {
    this.placeHorizontal(Xcoordinates, Ycoordinates, shipType);
  }
};

module.exports = GameBoard