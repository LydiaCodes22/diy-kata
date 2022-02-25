/* eslint-disable prettier/prettier */
const reachDestination = (distance, speed) => {
    function roundHalf(num) {
        return Math.round(num*2)/2;
    }
    const approxEta = (distance/speed);
    return `I should be there in ${roundHalf(approxEta)} hours.`
    
};

module.exports = reachDestination;
