function shiftLetter(letter, count) {
    const lowerMin = "a".charCodeAt(0);
    const upperMin = "A".charCodeAt(0);
    const range = "z".charCodeAt(0) - "a".charCodeAt(0) + 1;

    if(letter.length === undefined || letter.length !== 1 || !letter.match(/[a-zA-Z]/)) return letter;

    const isUpper = letter.match(/[A-Z]/) != null;
    
    let min;
    if(isUpper) {
        min = upperMin;
    }
    else {
        min = lowerMin;
    }

    letter = (letter.charCodeAt(0) + count);
    if(letter >= min + range) letter = letter % (min + range) + min;
    while(letter < min) letter += range;

    return String.fromCharCode(letter);
}

const caesar = function(string, count) {
    count = count % 26;
    let result = string.split('').map(c => shiftLetter(c, count)).join('');
    return result;
};

// Do not edit below this line
module.exports = caesar;
