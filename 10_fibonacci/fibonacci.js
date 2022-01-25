const fibonacci = function(num) {
    if(typeof(+num) !== "number") return "OOPS";

    num = +num;

    if(num < 0) return "OOPS";
    if(num < 2) return num;
    if(num == 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
