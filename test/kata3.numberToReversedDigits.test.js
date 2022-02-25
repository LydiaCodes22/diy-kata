const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(1489)).toEqual([9, 8, 4, 1]);
    expect(numberToReversedDigits(583942)).toEqual([2, 4, 9, 3, 8, 5]);
  });
});
