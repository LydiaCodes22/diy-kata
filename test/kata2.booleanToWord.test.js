const { TestScheduler } = require("jest");
const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test('returns yes when given the value true',() => {
    expect(booleanToWord(true)).toEqual('yes');
  });
  test('returns no when given the value false', () => {
    expect(booleanToWord(false)).toEqual('no');
  });
});
