/* eslint-disable prettier/prettier */
const humanCatDogYears = number => {
    const catOverTwo=((number-2)*4);
    const dogOverTwo=((number-2)*5);
    if(number===1){return [number, 15, 15]}
    if (number===2){return [number, 24, 24]}
    return[number,(24+catOverTwo), (24+dogOverTwo)]
};

module.exports = humanCatDogYears;
