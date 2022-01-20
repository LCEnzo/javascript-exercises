const repeatString = function(string, numberOfRepetitions) {
    let ret = '';

    if(numberOfRepetitions < 0) return "ERROR";

    for(let i = 0; i < numberOfRepetitions; i++) {
        ret = ret + string;
    }

    return ret;
};

// Do not edit below this line
module.exports = repeatString;
