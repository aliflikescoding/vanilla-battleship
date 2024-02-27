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

Bot.prototype.reserveSpot = function (rotateStatus, type, x, y) {
  const grid = this.getGrid();
  if (rotateStatus == 0) {
    if (type === 0 || type === 1) {
      for (let i = 0; i < 4; i++) {
        grid[y][x+i] = 1;
      }
    } else if (type === 2 || type === 3) {
      for (let i = 0; i < 3; i++) {
        grid[y][x+i] = 1;
      }
    } else {
      for (let i = 0; i < 2; i++) {
        grid[y][x+i] = 1;
      }
    }
  }
  else {
    if (type === 0 || type === 1) {
      for (let i = 0; i < 4; i++) {
        grid[y+i][x] = 1;
      }
    } else if (type === 2 || type === 3) {
      for (let i = 0; i < 3; i++) {
        grid[y+i][x] = 1;
      }
    } else {
      for (let i = 0; i < 2; i++) {
        grid[y+i][x] = 1;
      }
    }
  }
  this.setGrid(grid);
}

Bot.prototype.checkSpot = function (rotateStatus, type, x, y) {
  const grid = this.getGrid();
  let status = true;
  if (rotateStatus == 0) {
    if (type === 0 || type === 1) {
      for (let i = 0; i < 4; i++) {
        if (grid[y][x+i] === 1) {
          status = false;
        }
      }
    } else if (type === 2 || type === 3) {
      for (let i = 0; i < 3; i++) {
        if (grid[y][x+i] === 1) {
          status = false;
        }
      }
    } else {
      for (let i = 0; i < 2; i++) {
        if (grid[y][x+i] === 1) {
          status = false;
        }
      }
    }
  }
  else {
    if (type === 0 || type === 1) {
      for (let i = 0; i < 4; i++) {
        if (grid[y+i][x] === 1) {
          status = false;
        }
      }
    } else if (type === 2 || type === 3) {
      for (let i = 0; i < 3; i++) {
        if (grid[y+i][x] === 1) {
          status = false;
        }
      }
    } else {
      for (let i = 0; i < 2; i++) {
        if (grid[y+i][x] === 1) {
          status = false;
        }
      }
    }
  }
  return status;
}

Bot.prototype.getSpot = function () {
  const x = this.getRandomNumber();
  const y = this.getRandomNumber();
  const rotateStatus = this.getRotateStatus();
  const type = this.getType();
  let arr = [];
  if (this.checkSpot(rotateStatus, type, x, y) === true) {
    arr.push(x);
    arr.push(y);
    return arr;
  }
  else {
    this.getSpot();
  }
}

Bot.prototype.getSpots = function () {
  let arr = [];
  const rotateStatus = this.getRotateStatus();
}

module.exports = Bot