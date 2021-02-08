const { makeRandomNumber } = require("../makeRandomNumber");

test("Random number has to be between passed parameters", () => {
  const min = 0;
  const max = 99;
  expect(makeRandomNumber(min, max)).toBeGreaterThanOrEqual(0);
  expect(makeRandomNumber(min, max)).toBeLessThanOrEqual(99);
});
