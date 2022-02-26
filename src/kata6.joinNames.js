/* eslint-disable prettier/prettier */
const joinNames = namesObj => {
   const newArray = namesObj.map(x=> x.name);
   const newString = `${newArray[newArray.length-2]} & ${newArray[newArray.length-1]}`
    newArray.splice((newArray.length-2))
    newArray.push(newString)
    return newArray.join(', ')
};



module.exports = joinNames;
