const sumAll = function(start, end) {
    if(start < 0 || end < 0) return "ERROR";
    if(typeof start != 'number' || typeof end != 'number') return "ERROR";

    if(start > end) {
        let c = start;
        start = end;
        end = c;
    }

    let res = (start + end) / 2 * (end - start + 1);

    return res;
};

// Do not edit below this line
module.exports = sumAll;
