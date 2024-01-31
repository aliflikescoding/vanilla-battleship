const Ship_3 = require('../_ship_3');

test("get ship length", () => {
  const ship = new Ship_3();

  expect(ship.getLength()).toBe(3);
});

test("get ships hit", () => {
  const ship = new Ship_3();

  expect(ship.getHits()).toBe(0);
});

test("test the hitShip function", () => {
  const ship = new Ship_3();
  ship.hitShip();
  ship.hitShip();

  expect(ship.getHits()).toBe(2);
});

test("test isSunk function", () => {
  const ship = new Ship_3();
  ship.hitShip();
  ship.hitShip();
  ship.hitShip();

  expect(ship.isSunk()).toBe(true);
});