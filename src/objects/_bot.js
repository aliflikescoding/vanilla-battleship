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

Bot.prototype.getRandomNumber = function () {
  return Math.floor(Math.random() * 6) + 1;
}

Bot.prototype.getRotateStatus = function () {
  return Math.floor(Math.random() * 2);
}

Bot.prototype.getSpots = function () {
  let arr = [];
  const rotateStatus = this.getRotateStatus();
}

module.exports = Bot