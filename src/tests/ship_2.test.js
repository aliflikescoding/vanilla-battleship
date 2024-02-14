const Ship_2 = require('../objects/_ship_2');

test("get ship length", () => {
  const ship = new Ship_2();

  expect(ship.getLength()).toBe(2);
});

test("get ships hit", () => {
  const ship = new Ship_2();

  expect(ship.getHits()).toBe(0);
});

test("test the hitShip function", () => {
  const ship = new Ship_2();
  ship.hitShip();
  ship.hitShip();

  expect(ship.getHits()).toBe(2);
});

test("test isSunk function", () => {
  const ship = new Ship_2();
  ship.hitShip();
  ship.hitShip();

  expect(ship.isSunk()).toBe(true);
});