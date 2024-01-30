function  Ship() {
  this.length = null;
  this.hit = 0;
  this.sunk = false;
}

Ship.prototype.getLength = function () {
  return this.length;  
};

Ship.prototype.getHits = function () {
  return this.hit;  
};

Ship.prototype.hitShip = function () {
  this.hit += 1;
};

Ship.prototype.isSunk = function () {
  if (this.length == this.hit) {
    this.sunk = true;
  }

  return this.sunk;
}

module.exports = Ship