const GameBoard = require("./../_gameBoard");

test("placing correctly horizontally 1", () => {
  const gameBoard = new GameBoard();
  gameBoard.placeHorizontal(0, 0, 2);

  expect(gameBoard.getGrid()).toStrictEqual([
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test("placing correctly horizontally 2", () => {
  const gameBoard = new GameBoard();
  gameBoard.placeHorizontal(2, 4, 4);

  expect(gameBoard.getGrid()).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test("placing correctly horizontally 2", () => {
  const gameBoard = new GameBoard();
  gameBoard.placeHorizontal(6, 2, 4);

  expect(gameBoard.getGrid()).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test("placing correctly vertically 1", () => {
  const gameBoard = new GameBoard();
  gameBoard.placeVertical(0, 0, 2);

  expect(gameBoard.getGrid()).toStrictEqual([
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test("placing correctly vertically 1", () => {
  const gameBoard = new GameBoard();
  gameBoard.placeVertical(2, 1, 3);

  expect(gameBoard.getGrid()).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test("placing correctly vertically 2", () => {
  const gameBoard = new GameBoard();
  gameBoard.placeVertical(9, 6, 4);

  expect(gameBoard.getGrid()).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  ]);
});

test("get horizontal coordinants 1", () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.getHorizontalCoordinants(0, 0, 2)).toStrictEqual([
    [0, 0],
    [1, 0],
  ]);
});

test("get horizontal coordinants 2", () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.getHorizontalCoordinants(6, 2, 3)).toStrictEqual([
    [6, 2],
    [7, 2],
    [8, 2]
  ]);
});

test("get horizontal coordinants 3", () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.getHorizontalCoordinants(3, 2, 4)).toStrictEqual([
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2]
  ]);
});

test("get vertical coordinants 1", () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.getVerticalCoordinants(0, 0, 2)).toStrictEqual([
    [0, 0],
    [0, 1],
  ]);
});

test("get vertical coordinants 2", () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.getVerticalCoordinants(6, 2, 3)).toStrictEqual([
    [6, 2],
    [6, 3],
    [6, 4]
  ]);
});

test("get vertical coordinants 3", () => {
  const gameBoard = new GameBoard();

  expect(gameBoard.getVerticalCoordinants(3, 2, 4)).toStrictEqual([
    [3, 2],
    [3, 3],
    [3, 4],
    [3, 5]
  ]);
});

test("return Ship_2", () => {
  const gameBoard = new GameBoard();

  Ship_2 = { length: 2, hit: 0, sunk: false}
  expect(gameBoard.returnShipObject(2)).toEqual(Ship_2);
})

test("return Ship_3", () => {
  const gameBoard = new GameBoard();

  Ship_3 = { length: 3, hit: 0, sunk: false}
  expect(gameBoard.returnShipObject(3)).toEqual(Ship_3);
})

test("return Ship_4", () => {
  const gameBoard = new GameBoard();

  Ship_4 = { length: 4, hit: 0, sunk: false}
  expect(gameBoard.returnShipObject(4)).toEqual(Ship_4);
})


test("place ship", () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(0, 0, 2)
  Ship_2 = { length: 2, hit: 0, sunk: false}
  expect(gameBoard.getShipArray()).toEqual([[Ship_2, [[0, 0], [1, 0]]]]);
})

test("place ship vertically", () => {
  const gameBoard = new GameBoard();
  gameBoard.rotateShipPosition();
  gameBoard.placeShip(0, 0, 2)
  Ship_2 = { length: 2, hit: 0, sunk: false}
  expect(gameBoard.getShipArray()).toEqual([[Ship_2, [[0, 0], [0, 1]]]]);
})

test("undo placement 1", () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(0, 0, 2)
  gameBoard.undoPlacement();
  expect(gameBoard.getShipArray()).toEqual([]);
})

test("undo placement 2", () => {
  const gameBoard = new GameBoard();
  gameBoard.placeShip(0, 0, 2)
  gameBoard.undoPlacement();

  expect(gameBoard.getGrid()).toStrictEqual([
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
  ]);
});

test("receive attack 1", () => {
  const gameBoard = new GameBoard();
  gameBoard.receiveAttack(0, 0)
  
  expect(gameBoard.getGrid()).toStrictEqual([
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});
  
  
test("receive attack 2", () => {
  const gameBoard = new GameBoard();
  gameBoard.receiveAttack(0, 0)
  gameBoard.receiveAttack(0, 1)
  gameBoard.receiveAttack(0, 2)
  
  expect(gameBoard.getGrid()).toStrictEqual([
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["x", 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});