const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const array1 = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]
    const array2 = [{name: 'Steve'}, {name: 'Mike'}, {name: 'Tilly'}, {name: 'Milly'}, {name: 'Rebecca'}]
    const array3 = [{name: 'Lisa'}]
    expect(joinNames(array1)).toEqual('Bart, Lisa & Maggie');
    expect(joinNames(array2)).toEqual('Steve, Mike, Tilly, Milly & Rebecca');
    expect(joinNames(array3)).toEqual('Lisa');
  });
});
