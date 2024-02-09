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
  this.shipNumber = this.shipArray.length;
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
  let coordinates = [];
  for (let i = 0; i <= shipType-1; i++) {
    coordinates.push([Xcoordinates + i, Ycoordinates]);
  }
  return coordinates;
}

GameBoard.prototype.getVerticalCoordinants = function (Xcoordinates, Ycoordinates, shipType) {
  let coordinates = [];
  for (let i = 0; i <= shipType-1; i++) {
    coordinates.push([Xcoordinates, Ycoordinates+i]);
  }
  return coordinates;
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
  let arrayTwo = [];
  if (this.rotate == false) {
    this.placeHorizontal(Xcoordinates, Ycoordinates, shipType);
    arrayTwo.push(this.returnShipObject(shipType));
    arrayTwo.push(this.getHorizontalCoordinants(Xcoordinates, Ycoordinates, shipType));
    array.push(arrayTwo);
  }
  else {
    this.placeVertical(Xcoordinates, Ycoordinates, shipType);
    arrayTwo.push(this.returnShipObject(shipType));
    arrayTwo.push(this.getVerticalCoordinants(Xcoordinates, Ycoordinates, shipType));
    array.push(arrayTwo);
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

GameBoard.prototype.getPositionShipIfHit = function (Xcoordinates, Ycoordinates) {
  shipArray = this.getShipArray();
  let shipIndex;
  shipArray.forEach((shipPair, index) => {
    let shipCords = shipPair[1];
    shipCords.forEach((cords) => {
      let x = cords[0];
      let y = cords[1];
      if (x == Xcoordinates && y == Ycoordinates) {
        shipIndex = index;
      }
    })
  })
  return shipIndex;
}

GameBoard.prototype.receiveAttack = function (Xcoordinates, Ycoordinates) {
  let array = this.getGrid();
  array[Ycoordinates][Xcoordinates] = "x";
  this.setGrid(array);
};

module.exports = GameBoard