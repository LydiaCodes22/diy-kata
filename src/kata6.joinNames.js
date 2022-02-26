/* eslint-disable prettier/prettier */
const joinNames = namesObj => {
   if (namesObj.length >= 2) {
    const newArray = namesObj.map(x=> x.name);
    const newString = `${newArray[newArray.length-2]} & ${newArray[newArray.length-1]}`;
       newArray.splice(newArray.length-2);
       newArray.push(newString);
       return newArray.join(', ');
    } else {return namesObj.join(', ')}
};



module.exports = joinNames;
