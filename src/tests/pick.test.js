const pick = require("../modules/_pick");


test("placing correctly horizontally 1", () => {
  expect(pick.type(0)).toBe(4);
  expect(pick.type(1)).toBe(4);
  expect(pick.type(2)).toBe(3);
  expect(pick.type(3)).toBe(3);
  expect(pick.type(4)).toBe(2);
});