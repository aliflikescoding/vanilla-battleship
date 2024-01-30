function  Ship() {
  this.length = length;
  this.hit = 0;
  this.sunk = false;
}

Ship.prototype.getLength = function () {
  return this.length;  
};

Ship.prototype.getHits = function () {
  return this.hit;  
};

Ship.prototype.getSunk = function () {
  return this.sunk;  
};

Ship.prototype.hitShip = function () {
  this.hit += 1;
};

Ship.prototype.isSunk = function () {
  if (this.length == this.hit) {
    this.sunk = true;
  }
}

export default Ship;