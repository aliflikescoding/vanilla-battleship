function  Bot() {
  this.type = 0;
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
}

Bot.prototype.getGrid = function () {
  return this.grid;
}

Bot.prototype.getType = function () {
  return this.type;
}

Bot.prototype.setGrid = function (newGrid) {
  this.grid = newGrid;
}

Bot.prototype.incrementType = function () {
  this.type += 1;
}

Bot.prototype.getRandomNumber = function () {
  return Math.floor(Math.random() * 6) + 1;
}

Bot.prototype.getRotateStatus = function () {
  return Math.floor(Math.random() * 2);
}

Bot.prototype.reserveSpot = function (rotateStatus, x, y) {
  const grid = this.getGrid();
  if (rotateStatus === 0 || rotateStatus === 1) {
    for (let i = 0; i < 4; i++) {
      grid[y][x] = 1;
    }
  } else if (rotateStatus === 2 || rotateStatus === 3) {
    for (let i = 0; i < 3; i++) {
      grid[y][x] = 1;
    }
  }
  else if (rotateStatus === 2 || rotateStatus === 3) {
    for (let i = 0; i < 3; i++) {
      grid[y][x] = 1;
    }
  } else {
    for (let i = 0; i < 2; i++) {
      grid[y][x] = 1;
    }
  }
}

Bot.prototype.getSpots = function () {
  let arr = [];
  const rotateStatus = this.getRotateStatus();
}

module.exports = Bot