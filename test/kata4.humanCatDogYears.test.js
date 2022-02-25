const { humanCatDogYears } = require("../src");

describe ('humanCatDogYears', () => {
    test ('dog and cat years are 15 in a humans first year', () => {
    expect (humanCatDogYears(1)).toEqual([1, 15, 15]);
});
    test('dog and cat years are 24 in a humans second year', () => {
        expect(humanCatDogYears(2)).toEqual([2,24,24]);
    });
    test('dog and cat years are 24 +4 for each year after a second year for a cat, and 24 +5 for every year after the second for a dog', () => {
        expect (humanCatDogYears(3)).toEqual([3,28,29]);
        expect (humanCatDogYears(30)).toEqual([30,(15+9+(4*28)),(15+9+(5*28))]);
    });

});