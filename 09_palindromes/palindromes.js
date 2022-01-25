const palindromes = function (string) {
    string = string.trim().toLowerCase().split('').filter(c => c.match(/[a-z]/));

    const len = string.length;
    const halfLen = len / 2;

    for(let i = 0; i < halfLen; i++) {
        if(string[i] != string[len - i - 1]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
