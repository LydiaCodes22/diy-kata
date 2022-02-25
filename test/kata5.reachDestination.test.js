/* eslint-disable prettier/prettier */
const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect (reachDestination(15,30)).toEqual('I should be there in 0.5 hours.');
    expect (reachDestination(40,60)).toEqual('I should be there in 0.5 hours.');
    expect (reachDestination(130,70)).toEqual('I should be there in 2 hours.');
  });
});
