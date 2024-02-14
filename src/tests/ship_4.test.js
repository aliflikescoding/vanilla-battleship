const Ship_4 = require('../objects/_ship_4');

test("get ship length", () => {
  const ship = new Ship_4();

  expect(ship.getLength()).toBe(4);
});

test("get ships hit", () => {
  const ship = new Ship_4();

  expect(ship.getHits()).toBe(0);
});

test("test the hitShip function", () => {
  const ship = new Ship_4();
  ship.hitShip();
  ship.hitShip();
  
  expect(ship.getHits()).toBe(2);
});

test("test isSunk function", () => {
  const ship = new Ship_4();
  ship.hitShip();
  ship.hitShip();
  ship.hitShip();
  ship.hitShip();

  expect(ship.isSunk()).toBe(true);
});