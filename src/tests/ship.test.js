const Ship = require('../_ship');

test("get ships hit", () => {
  const ship = new Ship();

  expect(ship.getHits()).toBe(0);
});

test("test the hitShip function", () => {
  const ship = new Ship();
  ship.hitShip();
  ship.hitShip();

  expect(ship.getHits()).toBe(2);
});

test("test isSunk function", () => {
  const ship = new Ship();

  expect(ship.isSunk()).toBe(false);
});